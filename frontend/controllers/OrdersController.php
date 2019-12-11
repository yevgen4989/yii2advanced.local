<?php
namespace frontend\controllers;

use frontend\models\ContactFormUserData;
use Yii;
use yii\base\InvalidParamException;
use yii\web\BadRequestHttpException;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use common\models\Category;
use common\models\Product;
use common\models\Contents;

/**
 * Site controller
 */
class OrdersController extends Controller
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


    public function actionIndex()
    {
        Yii::$app->layout = "dashboard";
        return $this->render('index');

    }
    public function actionLogout() {
        Yii::$app->user->logout();
        $this->redirect(Yii::$app->homeUrl);
    }
}
