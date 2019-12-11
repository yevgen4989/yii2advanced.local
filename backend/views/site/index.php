<?php
use yii\helpers\Html;
$this->title = 'Admin panel';

Yii::$app->db->schema->refresh();
?>

<div class="container">
	<div class="alert alert-success"><strong>Добро пожаловать в Admin Panel</strong></div>
	<div class="jumbotron">
		<div class="row" style="text-align:center;">
			<div class="col-xs-12">
				<div class="col-xs-2">
					<?= Html::a(Html::img('@web/images/menu/documento.png') . '<div>Товар</div>', ['/product/index'], ['class' => 'block_menu']) ?>
				</div>
				<div class="col-xs-2">
					<?= Html::a(Html::img('@web/images/menu/carpeta.png') . '<div>Категории</div>', ['/category/index'], ['class' => 'block_menu']) ?>
				</div>
				<div class="col-xs-2">
					<?= Html::a(Html::img('@web/images/menu/grafico-circular.png') . '<div>Способ оплаты</div>', ['/payment/index'], ['class' => 'block_menu']) ?>
				</div>
				<div class="col-xs-2">
					<?= Html::a(Html::img('@web/images/menu/faq.png') . '<div>Информационные страницы</div>', ['/contents/index'], ['class' => 'block_menu']) ?>
				</div>
                <div class="col-xs-2">
                    <?= Html::a(Html::img('@web/images/menu/faq.png') . '<div>Типы информационных страниц</div>', ['/type/index'], ['class' => 'block_menu']) ?>
                </div>
				<div class="col-xs-2">
					<?= Html::a(Html::img('@web/images/menu/shopping-cart.png') . '<div>Заказы</div>', ['/orders/index'], ['class' => 'block_menu']) ?>
				</div>
			</div>
			<div class="col-xs-12">
                <div class="col-xs-2">
                    <?= Html::a(Html::img('@web/images/menu/check-list.png') . '<div>Статусы заказа</div>', ['/status-order/index'], ['class' => 'block_menu']) ?>
                </div>
				<div class="col-xs-2">
					<?= Html::a(Html::img('@web/images/menu/proceso.png') . '<div>Основная информация сайта</div>', ['/options/index'], ['class' => 'block_menu']) ?>
				</div>
				<div class="col-xs-2">
					<?= Html::a(Html::img('@web/images/menu/telephone.png') . '<div>Заказ звонка</div>', ['/get-call/index'], ['class' => 'block_menu']) ?>
				</div>
				<div class="col-xs-2">
					<?= Html::a(Html::img('@web/images/menu/1558962933etiqueta.png') . '<div>Акции и скидки</div>', ['/action/index'], ['class' => 'block_menu']) ?>
				</div>
			</div>
		</div>
	</div>
</div>
