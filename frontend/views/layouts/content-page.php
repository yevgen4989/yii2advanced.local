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
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body>
	<?php $this->beginBody() ?>
		<div id="content" style="background-color:white; color:black;">
			<div id="content-page" style="padding-top: 1em;">
				<div class="container" >
						<?= Alert::widget() ?>
						<?= $content ?>
				</div>
			</div>
		</div>
	<?=$this->render('//shared/footer',['options'=>$options,'contents'=>$contents]);?>
	<?=$this->render('//shared/modal-sidebar');?>
	<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
