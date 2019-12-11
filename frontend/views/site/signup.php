<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \frontend\models\SignupForm */

use common\models\Contents;
use common\models\Options;
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;
$options = Options::getOptionsObject();
$contents = Contents::getContentsPage();
$this->title = 'Регистрация';
$this->params['breadcrumbs'][] = $this->title;
?>

<div class="blue-color full-container text-center" id="login-form-container">
    <div class="row top-login">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-left">
            <div class="text white"><a href="/">На главную</a></div>
        </div>
        <!--<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-right">
            <div class="text white"><a href="#">О сервисе</a></div>
        </div> -->

    </div>
    <div class="clearfix"></div>
    <div class="row form-container">
        <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12 login-box"><a class="logo" href="/"><img alt="logo" src="/site/<?=$options['image_logo']?>"></a>
            <aside class="col-xs-12 textbox">
                <h2 class="black"><?= Html::encode($this->title) ?></h2>

                <?php $form = ActiveForm::begin(['id' => 'loginform']); ?>

                <div class="col-md-6">
                    <?= $form->field($model, 'username', [
                        'template' => '<div class="form-group">
                                       <div class="input-group"><span class="input-group-addon"><i class="fa fa-user"></i></span>
                                            {input}
                                        </div>
                                    </div>
                                    {error}
                                    {hint}'
                    ])->textInput(['autofocus' => true, 'placeholder' => 'Логин', 'class'=>'form-control'])->label(false)->error(
                        ['class'=>'invalid-feedback']
                    ); ?>

                    <?= $form->field($model, 'last_name', [
                        'template' => '<div class="form-group">
                                       <div class="input-group"><span class="input-group-addon"><i class="fa fa-user"></i></span>
                                            {input}
                                        </div>
                                    </div>
                                    {error}
                                    {hint}'
                    ])->textInput(['autofocus' => false, 'placeholder' => 'Фамилия', 'class'=>'form-control'])->label(false)->error(
                        ['class'=>'invalid-feedback']
                    ); ?>

                    <?= $form->field($model, 'name', [
                        'template' => '<div class="form-group">
                                       <div class="input-group"><span class="input-group-addon"><i class="fa fa-user"></i></span>
                                            {input}
                                        </div>
                                    </div>
                                    {error}
                                    {hint}'
                    ])->textInput(['autofocus' => false, 'placeholder' => 'Имя', 'class'=>'form-control'])->label(false)->error(
                        ['class'=>'invalid-feedback']
                    ); ?>

                    <?= $form->field($model, 'sec_name', [
                        'template' => '<div class="form-group">
                                       <div class="input-group"><span class="input-group-addon"><i class="fa fa-user"></i></span>
                                            {input}
                                        </div>
                                    </div>
                                    {error}
                                    {hint}'
                    ])->textInput(['autofocus' => false, 'placeholder' => 'Отчество', 'class'=>'form-control'])->label(false)->error(
                        ['class'=>'invalid-feedback']
                    ); ?>

                </div>

                <div class="col-md-6">

                    <?= $form->field($model, 'date_of_birth', [
                        'template' => '<div class="form-group">
                                       <div class="input-group"><span class="input-group-addon"><i class="fa fa-calendar"></i></span>
                                            {input}
                                        </div>
                                    </div>
                                    {error}
                                    {hint}'
                    ])->widget(yii\jui\DatePicker::className(),['options' => ['class' => 'form-control'],'clientOptions' => ['dateFormat' => 'dd/MM/yyyy']]); ?>

                    <?= $form->field($model, 'email', [
                        'template' => '<div class="form-group">
                                       <div class="input-group"><span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                                            {input}
                                        </div>
                                    </div>
                                    {error}
                                    {hint}'
                    ])->textInput(['autofocus' => false, 'placeholder' => 'Email', 'class'=>'form-control'])->label(false)->error(
                        ['class'=>'invalid-feedback']
                    ); ?>

                    <?= $form->field($model, 'password', [
                        'template' => '<div class="form-group">
                                       <div class="input-group"><span class="input-group-addon"><i class="fa fa-key"></i></span>
                                            {input}
                                        </div>
                                    </div>
                                    {error}
                                    {hint}'
                    ])->passwordInput(['autofocus' => false, 'placeholder' => 'Пароль', 'class'=>'form-control'])->label(false)->error(
                        ['class'=>'invalid-feedback']
                    ); ?>

                </div>



                <div class="clearfix"></div>


                <div class="col-md-12">
<!--                        <div class="form-check text-center margin-top-bottom-15">
                        <input class="form-check-input" type="checkbox" value="" id="form-registration-date">
                        <label class="form-check-label inline margin-left-15" for="form-registration-date">
                            Принять <a href="#">"Соглашение на обработку персональных данных"</a>
                        </label>
                    </div>
-->

                <div class="form-group">
                    <?= Html::submitButton('Зарегистрироваться', ['class' => 'dmbutton btn btn-primary', 'name' => 'signup-button']) ?>
                </div>
                </div>
                <?php ActiveForm::end(); ?>
            </aside>
        </div>
    </div>
    <div class="clearfix"></div>
    <div class="row bottom-login">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-left">
            <div class="copyright-text white">Copyright © 2019</div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-right">
            <div class="error-text white"><a href="">Сообщить об ошибке</a></div>
        </div>
    </div>
</div>
