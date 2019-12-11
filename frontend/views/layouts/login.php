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

    ?>

    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<?php $this->beginBody() ?>
<body id="page-top" class="login">


<?= $content ?>
<?
$this->registerJsFile('@web/front/js/jquery.min.js');
$this->registerJsFile('@web/front/js/bootstrap/bootstrap.min.js');
?>

<?php $this->endBody() ?>

</body>
</html>
<?php $this->endPage() ?>
