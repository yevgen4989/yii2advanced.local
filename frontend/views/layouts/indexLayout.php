<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\helpers\Url;
use yii\widgets\Breadcrumbs;
use frontend\assets\AppAsset;
use common\widgets\Alert;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>

    <meta http-equiv="Content-Type" content="text/html; charset="<?= Yii::$app->charset ?>"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php $this->registerCsrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>

    <?
    $this->registerLinkTag(['rel' => 'icon', 'type' => 'image/png', 'href' => Url::to(['/front/images/favicon.png'])]);
    $this->registerCssFile('@web/front/css/all-stylesheets.css');
    $this->registerCssFile('@web/front/css/rs-slider/settings.css');
    $this->registerCssFile('@web/front/css/rs-slider/extralayers.css');
    ?>

    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<?php $this->beginBody() ?>
<body id="page-top" class="<?if(Yii::$app->request->url == '/'){ echo 'home-page';} else{echo 'login';}?>">
<div id="loader"></div>

<?= $content ?>
<?php $this->endBody() ?>
<?
$this->registerJsFile('@web/front/js/jquery.min.js');
$this->registerJsFile('@web/front/js/bootstrap/bootstrap.min.js');
$this->registerJsFile('@web/front/js/jquery.easing.min.js');
$this->registerJsFile('@web/front/owl-carousel/js/owl.carousel.js');
$this->registerJsFile('@web/front/js/jquery.prettyPhoto.js');
$this->registerJsFile('@web/front/js/jquery.jigowatt.js');
$this->registerJsFile('@web/front/js/custom.js');
$this->registerJsFile('@web/front/js/countdown.js');
$this->registerJsFile('@web/front/js/rs-plugin/jquery.themepunch.tools.min.js');
$this->registerJsFile('@web/front/js/rs-plugin/jquery.themepunch.revolution.min.js');
$this->registerJsFile('@web/front/js/masonary/masonry3.1.4.js');
$this->registerJsFile('@web/front/js/masonary/masonry.filter.js');
$this->registerJsFile('@web/front/js/masonary/imagesloaded.js');

?>

<script type="text/javascript">jQuery(document).ready(function () {
        jQuery('#contact').yiiActiveForm([], []);
    });</script>


<script type="text/javascript">
    jQuery(document).ready(function () {
        jQuery('.tp-banner').show().revolution(
            {

                dottedOverlay: "none",
                delay: 16000,
                startwidth: 1170,
                startheight: 700,
                hideThumbs: 200,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 5,
                navigationType: "bullet",
                navigationArrows: "solo",
                navigationStyle: "preview4",
                touchenabled: "on",
                onHoverStop: "on",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                parallax: "mouse",
                parallaxBgFreeze: "on",
                parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],
                keyboardNavigation: "off",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                shadow: 0,
                fullWidth: "off",
                fullScreen: "on",
                spinner: "spinner4",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
                forceFullWidth: "off",
                hideThumbsOnMobile: "off",
                hideNavDelayOnMobile: 1500,
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResolution: 0,
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0,
                fullScreenOffsetContainer: "#header"
            });
    });
</script>
</body>
</html>
<?php $this->endPage() ?>
