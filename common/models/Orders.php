<?php
namespace common\models;

use Yii;
use frontend\models\Cart;

class Orders extends \yii\db\ActiveRecord
{
    public static function TableName()
    {
        return '{{yii_order}}';
    }

    public function rules()
    {
        return [
            [['delivery_method', 'full_price','delivery_date','payment_method','prepayment','status'], 'integer'],
			[['phone'], 'string', 'max' => 20],
			[['email'], 'string', 'max' => 80],
            [['initials','delivery_address'], 'string', 'max' => 255],
            [['comment'], 'string'],
        ];
    }

    public function attributeLabels()
    {
        return [
            'full_price' => 'Общая цена',
            'delivery_method' => 'Способ доставки',
            'initials' => 'ФИО',
            'phone' => 'Телефон',
            'email' => 'email',
            'delivery_address' => 'Адрес доставки',
            'delivery_date' => 'Время доставки',
            'payment_method' => 'Способ оплаты',
            'prepayment' => 'Предоплата',
            'status' => 'Статус заказа',
            'comment' => 'Комментарий к заказу',
        ];
    }
	
	public static function setOrderCheckout($get)
	{ 
		if($get)
		{
			$model_order = new Orders();
			if($model_order->full_price = Cart::getFullPrice(Yii::$app->request->cookies))
			{
				$model_order->delivery_method = $get['delivery_method'];
				$model_order->initials = $get['initials'];
				$model_order->phone = $get['phone'];
				$model_order->email = $get['email'];
				$model_order->delivery_address = $get['delivery_address'];
				$model_order->delivery_date = strtotime($get['delivery_date_d'].' '.$get['delivery_date_t']);
				$model_order->payment_method = $get['payment_method'];
				$model_order->prepayment = 0;
				$model_order->comment = $get['comment'];
				$model_order->status = 1;
				if(!$model_order->save())
				{
					print_r($model_order->getErrors()); exit;
				}
				return $model_order->id;
			}
			return false;
		}
	}
	
	public function setFullPriceOrder($id,$full_price)
	{
		$model_orders = Orders::findOne($id);
		if($model_orders)
		{
			$model_orders->full_price = $full_price;
			if(!$model_orders->save())
			{
				print_r($model_orders->getErrors()); exit;
			}
			return true;
		}
		return false;
	}
	
	public function recalculationFullPriceOrder($id_order)
	{
		$model_basket = Baskets::find()->where(['id_order'=>$id_order])->asArray()->all();
		if($model_basket)
		{
			$full_price = 0;
			foreach($model_basket as $basket)
			{
				$full_price += $basket['price'];
			}
			$model_order = Orders::findOne($id_order);
			if($model_order)
			{
				$model_order->full_price = $full_price;
				if(!$model_order->save())
				{
					print_r($model_order->getErrors()); exit;
				}
			}
		}
	}
}