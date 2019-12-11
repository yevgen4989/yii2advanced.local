<?php


$this->title = 'Dashboard';
Yii::$app->db->schema->refresh();
use common\models\Contents;
use common\models\Options;
use yii\bootstrap\Html;
use yii\widgets\Menu;
use wadeshuler\sliderrevolution\SliderRevolution;
$options = Options::getOptionsObject();
$contents = Contents::getContentsPage();

?>
<div class="color-switcher-toggle">
    <i class="material-icons">settings</i>
</div>
<div class="container-fluid">
    <div class="row">
        <aside class="main-sidebar col-12 col-md-3 col-lg-2 px-0">
            <div class="main-navbar">
                <nav class="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
                    <a class="navbar-brand w-100 mr-0" href="/" style="line-height: 25px;">
                        <div class="d-table m-auto">
                            <img id="main-logo" class="d-inline-block align-top ml-1" style="max-width: 165px;"
                                 src="<?=Yii::getAlias('@web/dashboard/images/logo.png')?>" alt="Logotype">
                        </div>
                    </a>
                    <a class="toggle-sidebar d-sm-inline d-md-none d-lg-none">
                        <i class="material-icons">&#xE5C4;</i>
                    </a>
                </nav>
            </div>
            <form action="#" class="main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none">
                <div class="input-group input-group-seamless ml-3">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            <i class="fas fa-search"></i>
                        </div>
                    </div>
                    <input class="navbar-search form-control" type="text" placeholder="Search for something..."
                           aria-label="Search"></div>
            </form>
            <div class="nav-wrapper social-list">
                <ul class="nav flex-column">
                    <li class="nav-item facebook">
                        <a class="nav-link" href="#">
                            <span>Facebook</span>
                        </a>
                    </li>
                    <li class="nav-item instagram">
                        <a class="nav-link " href="#">
                            <span>Instagram</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
        <main class="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
            <div class="main-navbar sticky-top bg-white">
                <!-- Main Navbar -->
                <nav class="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
                    <div class="w-100 d-none d-md-flex d-lg-flex"></div>
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
                                <img class="user-avatar rounded-circle mr-2" src="<?=Yii::getAlias('@web/dashboard/images/avatars/1.jpg')?>"
                                     alt="User Avatar">
                                <span class="d-none d-md-inline-block">Евгений Писоцкий</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-small">
                                <a class="dropdown-item" href="/cabinet">
                                    <i class="material-icons">&#xE7FD;</i>Личный кабинет</a>
                                <a class="dropdown-item" href="#">
                                    <i class="material-icons">vertical_split</i>Изменить пароль</a>
                                <div class="dropdown-divider"></div>
                                <?= Html::a('<i class="material-icons text-danger">&#xE879;</i> Выйти </a>', ['site/logout'], ['data' => ['method' => 'post'], 'class'=>'dropdown-item text-danger']) ?>
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

                <div class="page-header row no-gutters py-2"></div>
                <div class="row">
                    <div class="col">
                        <div class="card card-small mb-4">
                            <div class="card-header bg-light"></div>
                            <div class="card-body p-0 pb-3 text-center">
                                <table class="table mb-0">
                                    <thead class="bg-light">
                                    <tr>
                                        <th scope="col" class="border-0">#</th>
                                        <th scope="col" class="border-0">Дата создания</th>
                                        <th scope="col" class="border-0">Социальная сеть</th>
                                        <th scope="col" class="border-0">Имя клиента</th>
                                        <th scope="col" class="border-0">Ссылка на продукт</th>
                                        <th scope="col" class="border-0">Цена</th>
                                        <th scope="col" class="border-0">Способ доставки</th>
                                        <th scope="col" class="border-0">Статус</th>
                                        <th scope="col" class="border-0">Операции</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            15:28:13
                                            <br>
                                            10/09/2019
                                        </td>
                                        <td class="social"><i class="fab fa-facebook-square"></i></td>
                                        <td>Татьяна Волосова</td>
                                        <td>
                                            <button type="button" class="mb-2 btn btn-sm btn-outline-primary mr-1"><i
                                                    class="material-icons">remove_red_eye</i></button>
                                        </td>
                                        <td>150 грн.</td>
                                        <td class="icon-ukr-pochta"><img src="<?=Yii::getAlias('@web/dashboard/images/icon_urk_poshta.png')?>"
                                                                         alt="Укрпочта"></td>
                                        <td>
                                            <div class="bg-success rounded text-white text-center p-1"
                                                 style="box-shadow: inset 0 0 5px rgba(0,0,0,.2);">Оплачен
                                            </div>
                                        </td>
                                        <td>
                                            <button type="button" class="mb-2 btn btn-sm btn-success mr-1 disabled">
                                                Отправить реквизиты
                                            </button>
                                            <button type="button" class="mb-2 btn btn-sm btn-info mr-1"
                                                    data-toggle="modal" data-target="#more_id_1">Подробнее
                                            </button>
                                            <button type="button" class="mb-2 btn btn-sm btn-danger mr-1"><i
                                                    class="material-icons">clear</i></button>

                                            <div class="modal fade" id="more_id_1" tabindex="-1" role="dialog"
                                                 aria-labelledby="myModalLabel" aria-hidden="true">
                                                <div class="modal-dialog" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <button type="button" class="close" data-dismiss="modal"
                                                                    aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                            <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                                                        </div>
                                                        <div class="modal-body">
                                                            ...
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary"
                                                                    data-dismiss="modal">Close
                                                            </button>
                                                            <button type="button" class="btn btn-primary">Save changes
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>10:25:58
                                            <br>
                                            14/10/2019
                                        </td>
                                        <td class="social"><i class="fab fa-instagram"></i></td>
                                        <td>Юлия Золотова</td>
                                        <td>
                                            <button type="button" class="mb-2 btn btn-sm btn-outline-primary mr-1"><i
                                                    class="material-icons">remove_red_eye</i></button>
                                        </td>
                                        <td>250 грн.</td>
                                        <td class="icon-novaya-pochta"><img src="<?=Yii::getAlias('@web/dashboard/images/icon-new-poshta.png')?>"
                                                                            alt="Новая почта"></td>
                                        <td>
                                            <div class="bg-warning rounded text-white text-center p-1"
                                                 style="box-shadow: inset 0 0 5px rgba(0,0,0,.2);">Ожидается
                                            </div>
                                        </td>
                                        <td>
                                            <button type="button" class="mb-2 btn btn-sm btn-success mr-1">Отправить
                                                реквизиты
                                            </button>
                                            <button type="button" class="mb-2 btn btn-sm btn-info mr-1">Подробнее
                                            </button>
                                            <button type="button" class="mb-2 btn btn-sm btn-danger mr-1"><i
                                                    class="material-icons">clear</i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>22:30:19
                                            <br>
                                            16/11/2019
                                        </td>
                                        <td class="social"><i class="fab fa-facebook-square"></i></td>
                                        <td>Алёна Плетнева</td>
                                        <td>
                                            <button type="button" class="mb-2 btn btn-sm btn-outline-primary mr-1"><i
                                                    class="material-icons">remove_red_eye</i></button>
                                        </td>
                                        <td>550 грн</td>
                                        <td class="icon-ukr-pochta"><img src="<?=Yii::getAlias('@web/dashboard/images/icon_urk_poshta.png')?>"
                                                                         alt="Укрпочта"></td>
                                        <td>
                                            <div class="bg-primary rounded text-white text-center p-1"
                                                 style="box-shadow: inset 0 0 5px rgba(0,0,0,.2);">Завершен
                                            </div>
                                        </td>
                                        <td>
                                            <button type="button" class="mb-2 btn btn-sm btn-success mr-1 disabled">
                                                Отправить реквизиты
                                            </button>
                                            <button type="button" class="mb-2 btn btn-sm btn-info mr-1">Подробнее
                                            </button>
                                            <button type="button" class="mb-2 btn btn-sm btn-danger mr-1"><i
                                                    class="material-icons">clear</i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>09:01:10
                                            <br>
                                            14/10/2019
                                        </td>
                                        <td class="social"><i class="fab fa-instagram"></i></td>
                                        <td>Светлана Абдюшева</td>
                                        <td>
                                            <button type="button" class="mb-2 btn btn-sm btn-outline-primary mr-1"><i
                                                    class="material-icons">remove_red_eye</i></button>
                                        </td>
                                        <td>780 грн</td>
                                        <td class="icon-novaya-pochta"><img src="<?=Yii::getAlias('@web/dashboard/images/icon-new-poshta.png')?>"
                                                                            alt="Новая почта"></td>
                                        <td>
                                            <div class="bg-warning rounded text-white text-center p-1"
                                                 style="box-shadow: inset 0 0 5px rgba(0,0,0,.2);">Ожидается
                                            </div>
                                        </td>
                                        <td>
                                            <button type="button" class="mb-2 btn btn-sm btn-success mr-1">Отправить
                                                реквизиты
                                            </button>
                                            <button type="button" class="mb-2 btn btn-sm btn-info mr-1">Подробнее
                                            </button>
                                            <button type="button" class="mb-2 btn btn-sm btn-danger mr-1"><i
                                                    class="material-icons">clear</i></button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>