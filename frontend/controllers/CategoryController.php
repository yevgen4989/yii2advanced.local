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
use common\models\Contents;

class CategoryController extends Controller
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
		$category = Category::findOne(['url'=>$url]);
		$products = $model_category->getProductsForCategory($category->id);
		return $this->render('view-products',
			[
				'products'=>$products,
				'category'=>$category,
			]
		);
	}
}
