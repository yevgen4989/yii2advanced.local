<?php
namespace backend\controllers;

use Yii;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use common\models\Contents;
use yii\data\ActiveDataProvider;

/**
 * Site controller
 */
class ContentsController extends Controller
{
    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'rules' => [
                    [
                        'actions' => ['error'],
                        'allow' => true,
                    ],
                    [
                        'actions' => ['index','update', 'delete','create'],
                        'allow' => true,
                        'roles' => ['admin'],
                    ],
                ],
            ],
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

    /**
     * Displays homepage.
     *
     * @return string
     */
    public function actionIndex()
    {
        $dataProvider = new ActiveDataProvider([
            'query' => Contents::find(),
            'sort' => [
                'defaultOrder' => [
                    'id' => SORT_DESC,
                ]
            ],
            'pagination' => [
                'pageSize' => 10,
            ],
        ]);
        return $this->render('index',
			[
				'dataProvider'=>$dataProvider,
				'model'=>$model
			]
		);
    }
	
    public function actionUpdate($id)
    {
        $model = Contents::findOne($id);
		
        if ($model->load(Yii::$app->request->post()) and $model->save())
		{
            return $this->redirect(['contents/index']);
        }
        return $this->render('update',
			[
				'model'=>$model
			]
		);
    }
	
    public function actionDelete($id)
    {
        $model = Contents::findOne($id);
		$model->delete();
        return $this->redirect(['contents/index']);
    }

    public function actionCreate()
    {
        $model = new Contents();
        if ($model->load(Yii::$app->request->post()) and $model->save()) 
		{
            return $this->redirect(['/contents/index']);
        } 
		else 
		{
            return $this->render('create', [
                'model' => $model,
            ]);
        }
    }
}
