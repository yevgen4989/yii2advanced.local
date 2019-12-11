<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use frontend\assets\AppAsset;
use common\widgets\Alert;
use common\models\Options;
use common\models\Contents;
use frontend\models\Cart;
AppAsset::register($this);
$options = Options::getOptionsObject();
$contents = Contents::getContentsPage();
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title>Корзина</title>
    <?php $this->head() ?>
</head>
	<body>
		<?php $this->beginBody() ?>
			<?php 
				$get_cookies_count = Cart::getAmountBasket(Yii::$app->request->cookies);
			?>
			<?=$this->render('//shared/main_menu',['options'=>$options,'get_cookies_count'=>$get_cookies_count,'contents'=>$contents]);?>
			<div id="content">
				<?=$this->render('//shared/header',['options'=>$options]);?>
				<div class="container">
						<?= Alert::widget() ?>
						<?= $content ?>
				</div>
			</div>
		<?=$this->render('//shared/footer',['options'=>$options,'contents'=>$contents]);?>
		<?=$this->render('//shared/modal-sidebar');?>
		<?php $this->endBody() ?>
	</body>
</html>
<?php $this->endPage() ?>