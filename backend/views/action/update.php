<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model common\models\Actions */

$this->title = 'Редактирование акции';
$this->params['breadcrumbs'][] = ['label' => 'Список акций', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="corres-update">
    <h1><?= Html::encode($this->title) ?></h1>
    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
