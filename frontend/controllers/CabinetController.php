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
class CabinetController extends Controller
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
        $model = ContactFormUserData::findOne(Yii::$app->user->identity->getId());

        Yii::$app->layout = "cabinet";
        return $this->render('index',['model'=>$model]);

    }
}
