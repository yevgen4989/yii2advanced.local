<?php
namespace frontend\controllers;

use Yii;
use yii\base\InvalidParamException;
use yii\web\BadRequestHttpException;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use common\models\Category;
use common\models\Product;
use common\models\RelationsProductCategory;

class ProductController extends Controller
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
        ];
    }

    public function actionViewProducts($url)
	{
		$model_category = new Category();
		$model_products = new Product();
		$model_relations = new RelationsProductCategory();
		$product = Product::findOne(['url'=>$url]);
		if($category = $model_relations->getCategoryFrom_IDProduct($product->id))
		{
			$products = $model_category->getProductsForCategory($category->id);
		}
		
		return $this->render('view-products',
			[
				'product'=>$product,
				'products'=>$products,
				'category'=>$category,
			]
		);
	}
}
