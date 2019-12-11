<?php
namespace frontend\controllers;

use Yii;
use yii\base\InvalidParamException;
use yii\web\BadRequestHttpException;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use yii\web\CookieCollection;
use common\models\Orders;
use common\models\Options;
use common\models\Baskets;
use frontend\models\Cart;
use frontend\models\SendMessage;
/**
 * Site controller
 */
class CartController extends Controller
{
    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'logout' => ['post'],
                ],
            ],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }
	public function actionContent(){}
	public function actionAdd(){}
	
	public function actionCheckout()
	{
		if($get = Yii::$app->request->get('Orders'))
		{

			if($id_order = Orders::setOrderCheckout($get))
			{
				if($basket = Baskets::setBasketCheckout(Yii::$app->request->cookies,$id_order))
				{
					if(Cart::deleteCartCookies(Yii::$app->response->cookies))
					{
						//Раскоментить на бєта-версии портрированного сервера с поддержкой функции mail()
						//SendMessage::sendOrder($get['email'],Yii::$app->request->cookies,$id_order);
						return $this->redirect(['/']);
					}
				}
			}
		}
	}
	
	public function actionOrder()
	{
		$this->layout = 'order';
		$get_cookies = Yii::$app->request->cookies;
		$full_price = 0;
		$options = Options::getOptionsObject();
		if($get_cookies)
		{
			if($get_cookies = $get_cookies['cart']->value)
			{
				foreach($get_cookies as $cart)
				{
					$full_price += $cart['price'] * $cart['count'];
					
				}
			}
		}
		$get_cookies = Yii::$app->request->cookies;
		return $this->render('order',
		[
			'get_cookies' => $get_cookies,
			'options' => $options,
			'full_price' => $full_price,
		]
		);
	}
	
    public function actionDelete_cart()
    {
        if(Yii::$app->request->isAjax)
        {
			$id = Yii::$app->request->get('id');
			$cookies = Yii::$app->response->cookies;
			$cookies->remove('cart');
			unset($cookies['cart']);
			$data = [];
            $full_price = 0;
            $full_prepay = 0;
            $full_count = 0;
			$get_cookies = Yii::$app->request->cookies;
			if($get_cookies = $get_cookies['cart']->value)
			{
				foreach($get_cookies as $cart)
				{
					if($id!=$cart['id'])
					{
						$data[$cart['id']] = [
							'id'=>$cart['id'],
							'name'=>$cart['name'],
							'img'=>$cart['img'],
							'price'=>$cart['price'],
							'count'=>$cart['count'],
						];
						$full_price += $cart['price'] * $cart['count'];
						$full_prepay = $full_price / 2;
						$full_count += $cart['count'];
					}
				}
				$cookies = Yii::$app->response->cookies;
				$cookies->remove('cart');
				unset($cookies['cart']);
				$cookies->add(new \yii\web\Cookie([
					'name' => 'cart',
					'value' => $data,
				]));
			}
			$transport_order = ['full_price'=>$full_price, 'full_prepay'=>$full_prepay, 'full_count' => $full_count];
			return json_encode($transport_order);
        }
    }

    public function actionAdd_cart()
    {
        if(Yii::$app->request->isAjax)
        {
            $DOM = '';
            $price = Yii::$app->request->get('price');
            $img = Yii::$app->request->get('img');
            $name = Yii::$app->request->get('name');
            $id = Yii::$app->request->get('id');
            $count = Yii::$app->request->get('count');
            $cookies = Yii::$app->response->cookies;
            $get_cookies = Yii::$app->request->cookies;
            $data = [];
            $full_price = 0;
            $full_prepay = 0;
            $full_count = 0;
            if($cookie_cart = $get_cookies['cart']->value)
            {
                foreach($cookie_cart as $cart)
                {
                    $data[$cart['id']] = [
                        'id'=>$cart['id'],
                        'name'=>$cart['name'],
                        'img'=>$cart['img'],
                        'price'=>$cart['price'],
                        'count'=>$cart['count'],
                    ];
                }
            }
			
            $data[$id] = ['id'=>$id, 'name'=>$name, 'img'=>$img, 'price'=>$price, 'count'=>$data[$id]['count']+$count];
			
            $cookies = Yii::$app->response->cookies;
            $cookies->add(new \yii\web\Cookie([
                'name' => 'cart',
                'value' => $data,
            ]));
			
            if($data)
            {
                foreach($data as $cart)
                {
                    $DOM .= '
						<div class="item box-product delete_product-'.$cart['id'].'" >
							<span class="remover" onCLick="deleteProduct('.$cart['id'].')" data-id="'.$cart['id'].'" data-action="remove_product">
								<svg width="17" height="17" viewBox="0 0 17 17">
									<defs>
                                        <style>
                                         .cls-1 {}
                                        </style>
									</defs>
								 <path id="крестик" class="cls-1" d="M404.485,342.071l-1.414,1.414L396,336.414l-7.071,7.072-1.414-1.415L394.586,335l-7.071-7.071,1.414-1.414L396,333.586l7.071-7.071,1.414,1.414L397.414,335Z" transform="translate(-387.5 -326.5)"></path>
								 </svg>
							 </span>
							 <div class="body">
								<p class="name">'.$cart['name'].'</p>
								<div class="details"><div class="price price_product_basket_id_'.$cart['id'].'" data-price="'.$cart['price'].'" > '.$cart['price'] * $cart['count'].' руб. </div>
									<div class="in_details">
										<div class="image">
											<img data-image="'.$cart['id'].'" width="65" src="/frontend/web/uploads/items/resize_'.$cart['img'].'" alt="">
										</div>
										<div class="buttons_container">
											<span class="sidebar-minus" data-id="'.$cart['id'].'">-</span>
											<input type="text" class="product_basket_id_'.$cart['id'].'" data-product-id="'.$cart['id'].'" value="'.$cart['count'].'">
											<span class="sidebar-plus" data-id="'.$cart['id'].'">+</span>
										</div>
									</div>
								</div>
							</div>
						</div> 
					';
					$full_price += $cart['price'] * $cart['count'];
                    $full_prepay = $full_price / 2;
                    $full_count += $cart['count'];
                }
				$transport_order = ['full_price'=>$full_price, 'full_prepay'=>$full_prepay, 'full_count' => $full_count];
            }
            array_push($transport_order,$DOM);
            return json_encode($transport_order);
        }
    }
	
	public function actionView_cart()
    {
        if(Yii::$app->request->isAjax)
        {
            $DOM = '';
            $cookies = Yii::$app->response->cookies;
            $get_cookies = Yii::$app->request->cookies;
            $data = [];
            $full_price = 0;
            $full_prepay = 0;
            $full_count = 0;
            if($cookie_cart = $get_cookies['cart']->value)
            {
                foreach($cookie_cart as $cart)
                {
                    $data[$cart['id']] = [
                        'id'=>$cart['id'],
                        'name'=>$cart['name'],
                        'img'=>$cart['img'],
                        'price'=>$cart['price'],
                        'count'=>$cart['count'],
                    ];
                    $full_price += $cart['price'] * $cart['count'];
                    $full_prepay = $full_price / 2 ;
                    $full_count += $cart['count'] ;
                }
            }

            $transport_order = ['full_price'=>$full_price, 'full_prepay'=>$full_prepay, 'full_count' => $full_count];
            $full_price += $price * $count;
            $full_prepay = $full_price / 2 ;
            $full_count += $count;
            if($data)
            {
                foreach($data as $cart)
                {
                    $DOM .= '
						<div class="item box-product delete_product-'.$cart['id'].'">
							<span class="remover" onCLick="deleteProduct('.$cart['id'].')" data-id="'.$cart['id'].'" data-action="remove_product">
								<svg width="17" height="17" viewBox="0 0 17 17">
									<defs>
                                        <style>
                                         .cls-1 {}
                                        </style>
									</defs>
								 <path id="крестик" class="cls-1" d="M404.485,342.071l-1.414,1.414L396,336.414l-7.071,7.072-1.414-1.415L394.586,335l-7.071-7.071,1.414-1.414L396,333.586l7.071-7.071,1.414,1.414L397.414,335Z" transform="translate(-387.5 -326.5)"></path>
								 </svg>
							 </span>
							 <div class="body">
								<p class="name">'.$cart['name'].'</p>
								<div class="details"><div class="price price_product_basket_id_'.$cart['id'].'" data-price="'.$cart['price'].'"> '.$cart['price'] * $cart['count'].' руб. </div>
									<div class="in_details">
										<div class="image">
											<img data-image="'.$cart['id'].'" width="65" src="/frontend/web/uploads/items/resize_'.$cart['img'].'" alt="">
										</div>
										<div class="buttons_container">
											<span class="sidebar-minus" data-id="'.$cart['id'].'">-</span>
											<input type="text" class="product_basket_id_'.$cart['id'].'" data-product-id="'.$cart['id'].'" value="'.$cart['count'].'">
											<span class="sidebar-plus" data-id="'.$cart['id'].'">+</span>
										</div>
									</div>
								</div>
							</div>
						</div> 
					';
                }
            }
            array_push( $transport_order,$DOM);
            return json_encode($transport_order);
        }
    }
	
	public function actionAdd_count_cart()
	{
		if(Yii::$app->request->isAjax)
		{
			$id_product = Yii::$app->request->get('id');
			$count = Yii::$app->request->get('count');
			$get_cookies = Yii::$app->request->cookies;
			$full_price = 0;
			if($get_cookies = $get_cookies['cart']->value)
			{
				foreach($get_cookies as $cart)
				{
					if($id_product==$cart['id'])
					{
						$full_price += $cart['price']*$count;
						$full_prepay = $full_price / 2 ;
						$full_count += $cart['count'] ;
						$data[$cart['id']] = [
							'id'=>$cart['id'],
							'name'=>$cart['name'],
							'img'=>$cart['img'],
							'price'=>$cart['price'],
							'count'=>$count,
						];
					}
					else
					{
						$full_price += $cart['price']*$cart['count'];
						$full_prepay = $full_price / 2 ;
						$full_count += $cart['count'] ;
						$data[$cart['id']] = [
							'id'=>$cart['id'],
							'name'=>$cart['name'],
							'img'=>$cart['img'],
							'price'=>$cart['price'],
							'count'=>$cart['count'],
						];
					}
				}
				$cookies = Yii::$app->response->cookies;
				$cookies->remove('cart');
				unset($cookies['cart']);
				$cookies->add(new \yii\web\Cookie([
					'name' => 'cart',
					'value' => $data,
				]));
				$transport_order = ['full_price'=>$full_price, 'full_prepay'=>$full_prepay, 'full_count' => $full_count];
				return json_encode($transport_order);
			}
		}
	}
}