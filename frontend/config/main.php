<?php

$params = array_merge(
    require(__DIR__ . '/../../common/config/params.php'), require(__DIR__ . '/../../common/config/params-local.php'), require(__DIR__ . '/params.php'), require(__DIR__ . '/params-local.php')
);

return [
    'id' => 'app-frontend',
    'homeUrl' => '/',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'controllerNamespace' => 'frontend\controllers',
    'components' => [
		'fileCache' => [
			'class' => 'yii\caching\FileCache',
		],
        'assetManager' => [
            'bundles' => [
                'yii\web\JqueryAsset' => [
                    'js'=>[]
                ],
                'yii\bootstrap\BootstrapPluginAsset' => [
                    'js'=>[]
                ],

                'yii\bootstrap\BootstrapAsset' => [
                    'css' => []
                ],
                'yii\validators\ValidationAsset' => [
                    'js' => []
                ],
                'yii\web\YiiAsset' => [
                    'js' => []
                ],
                'yii\widgets\ActiveFormAsset' => [
                    'js' => []
                ],
                'yii\captcha\CaptchaAsset' => [
                    'js' => []
                ],
                'yii\grid\GridViewAsset' => [
                    'js' => []
                ]

            ]
        ],
        'view' => [
            'theme' => [
                'pathMap' => ['@app/views' =>
                    [
                        '@frontend/themes/franke/views'
                    ],
                ],
                'baseUrl' => '@web/themes/basic',
            ],
        ],

        'request' => [
            //'csrfParam' => '_csrf-frontend',
            'baseUrl' => ''
        ],
		
        'user' => [
            'identityClass' => 'common\models\User',
            'enableAutoLogin' => true,
            'identityCookie' => ['name' => '_identity-frontend', 'httpOnly' => true],
        ],
        'session' => [
            // this is the name of the session cookie used for login on the frontend
            'name' => 'advanced-frontend',
        ],
		
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
					 'categories' => ['yii\swiftmailer\Logger::add'],
                ],
            ],
        ],
		
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
		
        'i18n' => [
            'translations' => [
                'eauth' => [
                    'class' => 'yii\i18n\PhpMessageSource',
                ],
            ],
        ],
		
        'log' => [
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'logFile' => '@app/runtime/logs/eauth.log',
                    'categories' => array('nodge\eauth\*'),
                    'logVars' => array(),
                ],
            ],
        ],
		
        'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => false,

            'rules' => [
				'' => 'site/index',
                'index'=> 'site/index',
                'contact'=> 'site/contact',
                'login'=>'site/login',
                'cabinet'=>'cabinet/index',
                'orders'=>'orders/index',
                'content/<url:[\w_-]+>'=>'content/view-page',
                'category/<url:[\w_-]+>'=>'category/view-products',
                'product/<url:[\w_-]+>'=>'product/view-products',
            ],
        ],
    ],
    'params' => $params,
];
