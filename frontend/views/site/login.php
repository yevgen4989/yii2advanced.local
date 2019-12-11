<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model \common\models\LoginForm */

use common\models\Contents;
use common\models\Options;
use yii\helpers\Html;
use yii\bootstrap\ActiveForm;

$options = Options::getOptionsObject();
$contents = Contents::getContentsPage();

$this->title = 'Авторизация';
$this->params['breadcrumbs'][] = $this->title;
?>

<div class="blue-color full-container text-center" id="login-form-container">
    <div class="row top-login">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-left">
            <div class="text white"><a href="/">На главную</a></div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-right">
            <div class="text white"><a href="/about">О сервисе</a></div>
        </div>
    </div>
    <div class="clearfix"></div>
    <div class="row form-container">
        <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12 login-box"><a class="logo" href="/"><img alt="logo"
                                                                                                           src="/site/<?=$options['image_logo']?>"></a>
            <aside class="col-xs-12 textbox">
                <h2 class="black"><?= Html::encode($this->title) ?></h2>




                <?php $form = ActiveForm::begin(['id' => 'loginform']); ?>

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
                <div class="form-group">
                    <div class="checkbox">
                        <label>
                            <?= $form->field($model, 'rememberMe')->checkbox()->label(false) ?>
                            Запомнить меня</label>

                        <?= Html::a('Забыли пароль?', ['site/request-password-reset']) ?>

                        <!--Need new verification email? //Html::a('Resend', ['site/resend-verification-email']) -->
                </div>

                <div class="form-group">
                    <div class="form-group">
                        <?= Html::submitButton('Войти', ['class' => 'dmbutton btn btn-primary', 'name' => 'login-button']) ?>
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
