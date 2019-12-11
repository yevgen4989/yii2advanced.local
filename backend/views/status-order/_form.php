<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use mihaildev\ckeditor\CKEditor;
use mihaildev\elfinder\InputFile;
use mihaildev\elfinder\ElFinder;
/* @var $this yii\web\View */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="corres-form">
	<?php $form = ActiveForm::begin(['options' => ['enctype' => 'multipart/form-data']]); ?>
		<div class='col-md-12'>
			<div class='col-md-6'>
				<div class='col-md-12'>
					<?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>
				</div>
				<div class='col-md-6'>
					<?= $form->field($model, 'active')->checkbox() ?>
				</div>
			</div>
		</div>
		
		<div class='col-md-12'>
			<div class="form-group">
				<?= Html::submitButton($model->isNewRecord ? 'Создать' : 'Обновить', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
			</div>
		</div>
    <?php ActiveForm::end(); ?>
</div>
