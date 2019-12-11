<?php

namespace frontend\assets;

use yii\web\AssetBundle;

/**
 * Main frontend application asset bundle.
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [

    ];
    public $js = [
        '/front/js/jquery.min.js',
        '/js/yii.js',
        '/js/yii.activeForm.js',
        '/js/yii.validation.js',
        '/js/yii.captcha.js',
        '/js/yii.gridView.js',
        
    ];
    public $depends = [
        //'yii\web\YiiAsset',
        //'yii\bootstrap\BootstrapAsset',
    ];
}
