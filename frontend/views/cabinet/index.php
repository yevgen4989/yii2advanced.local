<?php

/* @var $this yii\web\View */

$this->title = 'Личный кабинет';
Yii::$app->db->schema->refresh();

use yii\bootstrap\ActiveForm;
use yii\helpers\Html;
use yii\widgets\Menu;
use wadeshuler\sliderrevolution\SliderRevolution;

?>


<div class="container-fluid">
    <div class="row">
        <main class="main-content col-lg-12 col-md-12 col-sm-12 p-0 ">

            <div class="main-navbar sticky-top bg-white">
                <nav class="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
                    <div class="w-100 d-none d-md-flex d-lg-flex">
                        <div class="main-navbar">
                            <nav class="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
                                <a class="navbar-brand w-100 mr-0" href="/" style="line-height: 25px;">
                                    <div class="d-table m-auto">
                                        <img id="main-logo" class="d-inline-block align-top ml-1"
                                             style="max-width: 165px;"
                                             src="<?= Yii::getAlias('@web/dashboard/images/logo.png') ?>"
                                             alt="Logotype">
                                    </div>
                                </a>
                                <a class="toggle-sidebar d-sm-inline d-md-none d-lg-none">
                                    <i class="material-icons">&#xE5C4;</i>
                                </a>
                            </nav>
                        </div>
                    </div>
                    <ul class="navbar-nav border-left flex-row ">
                        <li class="nav-item border-right dropdown notifications">
                            <a class="nav-link nav-link-icon text-center" href="#" role="button" aria-haspopup="true"
                               aria-expanded="false">
                                <div class="nav-link-icon__wrapper">
                                    <i class="material-icons">help_outline</i>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#"
                               role="button" aria-haspopup="true" aria-expanded="false">
                                <img class="user-avatar rounded-circle mr-2"
                                     src="<?= Yii::getAlias('@web/dashboard/images/avatars/1.jpg') ?>"
                                     alt="User Avatar">
                                <span class="d-none d-md-inline-block">Евгений Писоцкий</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-small">
                                <a class="dropdown-item" href="#">
                                    <i class="material-icons">&#xE7FD;</i>Личный кабинет</a>
                                <a class="dropdown-item" href="#">
                                    <i class="material-icons">vertical_split</i>Изменить пароль</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item text-danger" href="#">
                                    <i class="material-icons text-danger">&#xE879;</i> Выйти </a>
                            </div>
                        </li>
                    </ul>
                    <nav class="nav">
                        <a href="#"
                           class="nav-link nav-link-icon toggle-sidebar d-md-inline d-lg-none text-center border-left"
                           data-toggle="collapse" data-target=".header-navbar" aria-expanded="false"
                           aria-controls="header-navbar">
                            <i class="material-icons">&#xE5D2;</i>
                        </a>
                    </nav>
                </nav>
            </div>

            <div class="main-content-container container-fluid px-4">

                <div class="page-header row no-gutters py-4">
                    <div class="col-6  text-center text-sm-left mb-0">
                        <h3 class="page-title">Личный кабинет</h3>
                    </div>
                    <div class="col-6 text-right">

                        <a class="bg-info rounded text-white p-3" style="box-shadow: inset 0 0 5px rgba(0,0,0,.2);"
                           href="/orders">Вернутся в Dashboard</a>
                    </div>
                </div>

                <div class="row">
                    <div class="col-3">
                        <div class="list-group" id="list-tab" role="tablist">
                            <a class="list-group-item list-group-item-action active" id="list-home-list"
                               data-toggle="list" href="#personal_data" role="tab" aria-controls="personal_data">Личные
                                данные</a>
                            <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
                               href="#list-profile" role="tab" aria-controls="profile">Подписка</a>
                            <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list"
                               href="#list-messages" role="tab" aria-controls="messages">Изменить пароль</a>
                        </div>
                        <a disabled class="bg-danger rounded text-white text-center p-3" href="#"
                           style="display: block; box-shadow: inset 0 0 5px rgba(0,0,0,.2); width: 55%; margin: 10px auto;">Удалить
                            аккаунт</a>
                    </div>
                    <div class="col-9">
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="personal_data" role="tabpanel"
                                 aria-labelledby="list-home-list">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="card card-small mb-4">
                                            <div class="card-header border-bottom">
                                                <h6 class="m-0">Account Details</h6>
                                            </div>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item p-3">
                                                    <div class="row">
                                                        <div class="col">


                                                            <?php $form = ActiveForm::begin(['id' => 'loginform']); ?>

                                                            <div class="form-row">

                                                                <?= $form->field($model, 'name', [
                                                                    'template' => '
                                                                                    {label}
                                                                                    {input}
                                                                                   
                                                                                    {error}
                                                                                    {hint}',
                                                                    'options'=>['class'=>'form-group col-md-4']
                                                                ])->textInput(['autofocus' => false, 'placeholder' => 'Имя', 'class'=>'form-control']);?>

                                                                <?= $form->field($model, 'sec_name', [
                                                                    'template' => '
                                                                                    {label}
                                                                                    {input}
                                                                                   
                                                                                    {error}
                                                                                    {hint}',
                                                                    'options'=>['class'=>'form-group col-md-4']
                                                                ])->textInput(['autofocus' => false, 'placeholder' => 'Отчество', 'class' => 'form-control'])->error(
                                                                    ['class' => 'invalid-feedback']
                                                                ); ?>

                                                                <?= $form->field($model, 'last_name', [
                                                                    'template' => '
                                                                                    {label}
                                                                                    {input}
                                                                                   
                                                                                    {error}
                                                                                    {hint}',
                                                                    'options'=>['class'=>'form-group col-md-4']
                                                                ])->textInput(['autofocus' => false, 'placeholder' => 'Фамилия', 'class' => 'form-control'])->error(
                                                                    ['class' => 'invalid-feedback']
                                                                ); ?>

                                                            </div>

                                                            <div class="form-row">

                                                                <?= $form->field($model, 'username', [
                                                                    'template' => '
                                                                                    {label}
                                                                                    {input}
                                                                                   
                                                                                    {error}
                                                                                    {hint}',
                                                                    'options'=>['class'=>'form-group col-md-3']
                                                                ])->textInput(['autofocus' => false, 'placeholder' => 'Логин', 'class' => 'form-control'])->error(
                                                                    ['class' => 'invalid-feedback']
                                                                ); ?>

                                                                <?= $form->field($model, 'email', [
                                                                    'template' => '
                                                                                    {label}
                                                                                    {input}
                                                                                   
                                                                                    {error}
                                                                                    {hint}',
                                                                    'options'=>['class'=>'form-group col-md-3']
                                                                ])->textInput(['autofocus' => false, 'placeholder' => 'Email', 'class' => 'form-control'])->error(
                                                                    ['class' => 'invalid-feedback']
                                                                ); ?>

                                                                <?= $form->field($model, 'address', [
                                                                    'template' => '
                                                                                    {label}
                                                                                    {input}
                                                                                   
                                                                                    {error}
                                                                                    {hint}',
                                                                    'options'=>['class'=>'form-group col-md-3']
                                                                ])->textInput(['autofocus' => false, 'placeholder' => 'Адрес', 'class' => 'form-control'])->error(
                                                                    ['class' => 'invalid-feedback']
                                                                ); ?>

                                                                <?= $form->field($model, 'date_of_birth', [
                                                                    'template' => '
                                                                                    {label}
                                                                                    {input}
                                                                                   
                                                                                    {error}
                                                                                    {hint}',
                                                                    'options'=>['class'=>'form-group col-md-3']
                                                                ])->widget(yii\jui\DatePicker::className(), ['options' => ['class' => 'form-control'], 'clientOptions' => ['dateFormat' => 'dd/MM/yyyy']]); ?>

                                                            </div>

                                                            <?= Html::submitButton('Обновить данные', ['class' => 'btn btn-accent', 'name' => 'signup-button']) ?>
                                                            <?php ActiveForm::end(); ?>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="list-profile" role="tabpanel"
                                 aria-labelledby="list-profile-list">...
                            </div>
                            <div class="tab-pane fade" id="list-messages" role="tabpanel"
                                 aria-labelledby="list-messages-list">...
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <footer class="main-footer d-flex p-2 px-3 bg-white border-top">
                <span class="copyright ml-auto my-auto mr-2">Copyright © 2019
            </span>
            </footer>
        </main>
    </div>
</div>
