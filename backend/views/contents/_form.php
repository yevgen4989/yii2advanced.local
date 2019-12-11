<?php

use common\models\Type;
use yii\helpers\ArrayHelper;
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
				<div class='col-md-12'>
					<?= $form->field($model, 'code')->textInput(['maxlength' => true]) ?>
				</div>
				<div class='col-md-12'>
					<?= $form->field($model, 'url')->textInput(['maxlength' => true,'placeholder'=>'Заполняется автоматически из названия страницы, если не задано']) ?>
				</div>
				<div class='col-md-12'>
					<?= $form->field($model, 'active')->checkbox() ?>
				</div>
                <?
                $result = ArrayHelper::map(Type::getTypeContentsPage(), 'id', 'name');
                ?>
                <div class="col-md-12">
                    <?=$form->field($model, 'type')->dropDownList($result);?>
                </div>
			</div>
		</div>
        <div class='col-md-12'>
            <div class='col-md-3'>
                <?= $form->field($model, 'image_file')->fileInput([]) ?>
            </div>
        </div>

        <div class='col-md-12'>
            <div class='col-md-12'>
                <?php if($model->image_header!=''): ?>
                    <img width="20%" src="/frontend/web/site/<?=$model->image_header?>">
                <?php endif; ?>
            </div>
        </div>

		<div class='col-md-12'>
			<label class="control-label">Описание страницы</label>
			<?php echo \mihaildev\ckeditor\CKEditor::widget(['model' => $model, 'attribute' => 'description', 'editorOptions' => \mihaildev\elfinder\ElFinder::ckeditorOptions(['elfinder', 'path' => '/'], ['preset' => 'standart', 'allowedContent' => true, 'height' => '200px'])]); ?> <p/>
		</div>
		<div class='col-md-12'>
			<div class="form-group">
				<?= Html::submitButton($model->isNewRecord ? 'Создать' : 'Обновить', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
			</div>
		</div>
    <?php ActiveForm::end(); ?>
</div>
