<?php

/* @var $this yii\web\View */

$this->title = 'Главная страница';
Yii::$app->db->schema->refresh();
use common\models\Contents;
use common\models\Options;
use yii\helpers\Html;
use yii\widgets\Menu;
use wadeshuler\sliderrevolution\SliderRevolution;
$options = Options::getOptionsObject();
$contents = Contents::getContentsPage();

?>

<div id="section-home">
    <header id="header">
        <nav id="navigation">

            <div class="navbar navbar-inverse" role="navigation">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span
                                class="icon-bar"></span> <span class="icon-bar"></span></button>
                    <a class="navbar-brand" href="/"><img src="<?= Yii::$app->request->baseUrl.'/site/'.$options['image_logo']?>" alt="Logo"></a>
                </div>
                <div class="collapse navbar-collapse pull-right">
                    <?= Menu::widget([
                        'items' => [
                            //['label' => '<span class="fa fa-home"></span>', 'url' => ['site/index']],
                            //['label' => 'Menu Item 1', 'url' => ['#']],
                            //['label' => 'Menu Item 2', 'url' => ['#']],
                            //['label' => 'Menu Item 3', 'url' => ['#']],
                            //['label' => 'Menu Item 4', 'url' => ['#']],

                        ],
                        'options' => [
                            'class' => 'nav navbar-nav',
                        ],
                        'activeCssClass'=>'current',
                        'encodeLabels' =>false
                    ])?>

                    <?= Menu::widget([
                        'items' => [
                            //['label' => 'Обратная связь', 'url' => ['site/contact']],
                            ['label' => 'Вход', 'url' => ['/login'], 'visible' => Yii::$app->user->isGuest],
                            ['label' => 'Личный кабинет', 'url' => ['/cabinet'], 'visible' => !Yii::$app->user->isGuest],
                            ['label' => 'Выход', 'url' => ['site/logout'], 'visible' => !Yii::$app->user->isGuest, 'template' => '<a href="{url}" data-method="post">{label}</a>'],
                        ],
                        'options' => [
                            'class' => 'nav navbar-nav nav_top_rt',
                        ],
                        'activeCssClass'=>'active'
                    ]);?>

                </div>
            </div>
            <div class="navspacer"></div>
        </nav>
    </header>

    <div id="slider">
        <div class="tp-banner-container">
            <div class="tp-banner">
                <ul>
                    <li data-transition="fade" data-slotamount="7" data-masterspeed="500"
                        data-thumb="<?=Yii::$app->request->baseUrl.'/front/images/banner-slide/thumbnail/slide1.jpg'?>" data-saveperformance="on"
                        data-title="Slide 1">

                        <h1 class="tp-caption lft customout rs-parallaxlevel-0"
                            data-x="left"
                            data-y="100"
                            data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                            data-speed="700"
                            data-start="1550"
                            data-easing="Power3.easeInOut"
                            data-elementdelay="0.1"
                            data-endelementdelay="0.1"
                            style="z-index: 2;">
                            Lorem ipsum <br>dolor sit amet,<br> consectetur adipiscing<br> elit.
                        </h1>

                        <div class="tp-caption tp-resizeme customout rs-parallaxlevel-0"
                             data-x="left"
                             data-y="400"
                             data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                             data-speed="700"
                             data-start="1400"
                             data-easing="Power3.easeInOut"
                             data-elementdelay="0.1"
                             data-endelementdelay="0.1"
                             style="z-index: 12; max-width: auto; max-height: auto; white-space: nowrap;">
                            <a class="largeredbtn" href="#">Try it for free</a>
                        </div>

                        <div class="tp-caption tp-resizeme customout rs-parallaxlevel-0"
                             data-x="140"
                             data-y="400"
                             data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                             data-speed="700"
                             data-start="1100"
                             data-easing="Power3.easeInOut"
                             data-elementdelay="0.1"
                             data-endelementdelay="0.1"
                             style="z-index: 12; max-width: auto; max-height: auto; white-space: nowrap;">
                            <a class="largeredbtn" href="#">How it works?</a>
                        </div>

                        <div class="tp-caption medium_text customin"
                             data-x="right"
                             data-y="80"
                             data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                             data-speed="500"
                             data-start="2000"
                             data-easing="Power3.easeInOut"
                             data-elementdelay="0.1"
                             data-endelementdelay="0.1"
                             style="z-index: 6;">
                            <img src="<?=Yii::$app->request->baseUrl.'/front/images/banner-slide/banner_image.png'?>" alt="">
                        </div>
                    </li>

                    <li data-transition="slideleft" data-slotamount="7" data-masterspeed="2000"
                        data-thumb="<?=Yii::$app->request->baseUrl.'/front/images/banner-slide/thumbnail/slide2.jpg'?>" data-delay="10000"
                        data-saveperformance="on" data-title="Slide 2">

                        <h1 class="tp-caption lft randomrotateout customout"
                            data-x="left"
                            data-y="100"
                            data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                            data-speed="700"
                            data-start="1550"
                            data-easing="Power3.easeInOut"
                            data-elementdelay="0.1"
                            data-endelementdelay="0.1"
                            style="z-index: 2;">Lorem ipsum <br>dolor sit amet,<br> consectetur adipiscing<br> elit.</h1>

                        <div class="tp-caption tp-resizeme customout rs-parallaxlevel-0"
                             data-x="left"
                             data-y="400"
                             data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                             data-speed="700"
                             data-start="1400"
                             data-easing="Power3.easeInOut"
                             data-elementdelay="0.1"
                             data-endelementdelay="0.1"
                             style="z-index: 12; max-width: auto; max-height: auto; white-space: nowrap;"><a
                                    class="largeredbtn" href="#">Try it for free</a></div>

                        <div class="tp-caption tp-resizeme customout rs-parallaxlevel-0"
                             data-x="140"
                             data-y="400"
                             data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                             data-speed="700"
                             data-start="1100"
                             data-easing="Power3.easeInOut"
                             data-elementdelay="0.1"
                             data-endelementdelay="0.1"
                             style="z-index: 12; max-width: auto; max-height: auto; white-space: nowrap;"><a
                                    class="largeredbtn" href="#">How it works?</a></div>

                        <div class="tp-caption lft customout rs-parallaxlevel-0"
                             data-x="650"
                             data-y="266"
                             data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                             data-speed="500"
                             data-start="2000"
                             data-easing="Power3.easeInOut"
                             data-elementdelay="0.1"
                             data-endelementdelay="0.1"
                             style="z-index: 6;"><img src="<?=Yii::$app->request->baseUrl.'/front/images/banner-slide/slide2-image1.png'?>" alt=""></div>

                        <div class="tp-caption lft customout rs-parallaxlevel-0"
                             data-x="680"
                             data-y="132"
                             data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                             data-speed="800"
                             data-start="2500"
                             data-easing="Power3.easeInOut"
                             data-elementdelay="0.1"
                             data-endelementdelay="0.1"
                             style="z-index: 6;"><img src="<?=Yii::$app->request->baseUrl.'/front/images/banner-slide/slide2-image2.png'?>" alt=""></div>

                        <div class="tp-caption lft customout rs-parallaxlevel-0"
                             data-x="700"
                             data-y="70"
                             data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                             data-speed="1000"
                             data-start="3000"
                             data-easing="Power3.easeInOut"
                             data-elementdelay="0.1"
                             data-endelementdelay="0.1"
                             style="z-index: 6;"><img src="<?=Yii::$app->request->baseUrl.'/front/images/banner-slide/slide2-image3.png'?>" alt=""></div>
                    </li>

                    <li data-transition="slideup" data-slotamount="7" data-masterspeed="1000"
                        data-thumb="<?=Yii::$app->request->baseUrl.'/front/images/banner-slide/thumbnail/slide3.jpg'?>" data-saveperformance="on"
                        data-title="Slide 3">

                        <h1 class="tp-caption lft customout"
                            data-x="left"
                            data-y="100"
                            data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                            data-speed="700"
                            data-start="1550"
                            data-easing="Power3.easeInOut"
                            data-elementdelay="0.1"
                            data-endelementdelay="0.1"
                            style="z-index: 2;">Lorem ipsum <br>dolor sit amet,<br> consectetur adipiscing<br> elit. </h1>


                        <div class="tp-caption tp-resizeme customout rs-parallaxlevel-0"
                             data-x="left"
                             data-y="400"
                             data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                             data-speed="700"
                             data-start="1400"
                             data-easing="Power3.easeInOut"
                             data-elementdelay="0.1"
                             data-endelementdelay="0.1"
                             style="z-index: 12; max-width: auto; max-height: auto; white-space: nowrap;"><a
                                    class="largeredbtn" href="#">Try it for free</a></div>


                        <div class="tp-caption tp-resizeme customout rs-parallaxlevel-0"
                             data-x="140"
                             data-y="400"
                             data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                             data-speed="700"
                             data-start="1100"
                             data-easing="Power3.easeInOut"
                             data-elementdelay="0.1"
                             data-endelementdelay="0.1"
                             style="z-index: 12; max-width: auto; max-height: auto; white-space: nowrap;"><a
                                    class="largeredbtn" href="#">How it works?</a></div>


                        <div class="tp-caption customin"
                             data-x="650"
                             data-y="110"
                             data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                             data-speed="500"
                             data-start="2000"
                             data-easing="Power3.easeInOut"
                             data-elementdelay="0.1"
                             data-endelementdelay="0.1"
                             style="z-index: 6;"><img src="<?=Yii::$app->request->baseUrl.'/front/images/banner-slide/banner_image3.png'?>" alt=""></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</div>

<div class="clear"></div>

<div class="container padding-box" id="about-us">
    <div class="row header">
        <article class="col-xs-12 textbox text-center">
            <?=Contents::getContentPageByCode('welcome')['description']?>
        </article>
    </div>

</div>

<!--
<div class="blue-color padding-box">
    <div class="container">
        <div class="row header">
            <div class="col-xs-12 text-white-color">
                <aside class="col-sm-6 col-xs-12 textlt">
                    <?//Contents::getContentPageByCode('block1')['description'];?>
                </aside>
                <figure class="col-sm-4 col-xs-4 pull-right"><img class="img-responsive" src="<?//Yii::$app->request->baseUrl.'/site/'.Contents::getContentPageByCode('block1')['image_header']?>" alt>
                </figure>
            </div>
        </div>

    </div>
</div>

<div class="container padding-box" id="service">
    <div class="row header">
        <article class="col-xs-12 textbox text-center">
            <h2 class="black">Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sagittis metus, at faucibus est. Donec condimentum, lacus eget maximus placerat, sem velit malesuada ante, nec euismod dui massa ac eros. </p>
        </article>
        <div class="contents services-carousel">
            <div>
                <div class="col-xs-12" data-effect="helix">
                    <div class="small-box1" data-effect="slide-top"><span class="fa fa-user"></span>
                        <h4>Lorem ipsum</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sagittis metus, at faucibus est. Donec condimentum, lacus eget maximus placerat, sem velit malesuada ante, nec euismod dui massa ac eros. </p>
                    </div>
                </div>
            </div>
            <div>
                <div class="col-xs-12" data-effect="helix">
                    <div class="small-box1" data-effect="slide-top"><span class="fa fa-gear"></span>
                        <h4>Lorem ipsum</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sagittis metus, at faucibus est. Donec condimentum, lacus eget maximus placerat, sem velit malesuada ante, nec euismod dui massa ac eros. </p>
                    </div>
                </div>
            </div>
            <div>
                <div class="col-xs-12" data-effect="helix">
                    <div class="small-box1" data-effect="slide-top"><span class="fa fa-search"></span>
                        <h4>Lorem ipsum</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sagittis metus, at faucibus est. Donec condimentum, lacus eget maximus placerat, sem velit malesuada ante, nec euismod dui massa ac eros. </p>
                    </div>
                </div>
            </div>
            <div>
                <div class="col-xs-12" data-effect="helix">
                    <div class="small-box1" data-effect="slide-top"><span class="fa fa-globe"></span>
                        <h4>Lorem ipsum</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sagittis metus, at faucibus est. Donec condimentum, lacus eget maximus placerat, sem velit malesuada ante, nec euismod dui massa ac eros. </p>
                    </div>
                </div>
            </div>
            <div>
                <div class="col-xs-12" data-effect="helix">
                    <div class="small-box1" data-effect="slide-top"><span class="fa fa-search"></span>
                        <h4>Lorem ipsum</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sagittis metus, at faucibus est. Donec condimentum, lacus eget maximus placerat, sem velit malesuada ante, nec euismod dui massa ac eros. </p>
                    </div>
                </div>
            </div>
            <div>
                <div class="col-xs-12" data-effect="helix">
                    <div class="small-box1" data-effect="slide-top"><span class="fa fa-gear"></span>
                        <h4>Lorem ipsum</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sagittis metus, at faucibus est. Donec condimentum, lacus eget maximus placerat, sem velit malesuada ante, nec euismod dui massa ac eros. </p>
                    </div>
                </div>
            </div>
            <div>
                <div class="col-xs-12" data-effect="helix">
                    <div class="small-box1" data-effect="slide-top"><span class="fa fa-user"></span>
                        <h4>Lorem ipsum</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sagittis metus, at faucibus est. Donec condimentum, lacus eget maximus placerat, sem velit malesuada ante, nec euismod dui massa ac eros. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
-->

<div class="grey-color">
    <div class="container padding-box" id="pricing">
        <div class="row header">
            <article class="col-xs-12 textbox text-center">
                <h2 class="black">Plans and Pricing</h2>
                <p></p>
                <aside class="col-xs-12 col-sm-4">
                    <div class="col-sm-12 plan1">
                        <h3>Silver</h3>
                        <div class="pakage_price"><span class="doller">$</span><span class="numeric">4</span><span
                                    class="blue">.99</span>/mo
                        </div>
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consuer adipiscing elit praesent</li>
                            <li>Vestibulum molestie lacus denean</li>
                            <li>Nonummy hendrerit mauris</li>
                        </ul>
                        <button aria-expanded="false" class="btn btn-primary btn-lg" type="button">Order Now</button>
                    </div>
                </aside>
                <aside class="col-xs-12 col-sm-4">
                    <div class="col-sm-12 plan1">
                        <h3>GOLD</h3>
                        <div class="pakage_price"><span class="doller">$</span><span class="numeric">4</span><span
                                    class="blue">.99</span>/mo
                        </div>
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consuer adipiscing elit praesent</li>
                            <li>Vestibulum molestie lacus denean</li>
                            <li>Nonummy hendrerit mauris</li>
                        </ul>
                        <button aria-expanded="false" class="btn btn-primary btn-lg" type="button">Order Now</button>
                    </div>
                </aside>
                <aside class="col-xs-12 col-sm-4">
                    <div class="col-sm-12 plan1">
                        <h3>Silver</h3>
                        <div class="pakage_price"><span class="doller">$</span><span class="numeric">4</span><span
                                    class="blue">.99</span>/mo
                        </div>
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consuer adipiscing elit praesent</li>
                            <li>Vestibulum molestie lacus denean</li>
                            <li>Nonummy hendrerit mauris</li>
                        </ul>
                        <button aria-expanded="false" class="btn btn-primary btn-lg" type="button">Order Now</button>
                    </div>
                </aside>
            </article>
        </div>

    </div>
</div>

<div class="blue-color padding-box">
    <div class="container">
        <div class="row header">
            <article class="col-xs-12 textbox text-center">
                <h2 class="white white_circle">We Build the Trust</h2>
                <p class="white">Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                    using ontent here content here making it look like readable English. Many desktop publishing
                    packages and web page editors now use.</p>
                <aside class="trustbox">
                    <ul class="list-inline">
                        <li>
                            <div class="counter"><span class="fa fa-smile-o"></span>
                                <div class="numeric stat-count">250</div>
                                LOREM IPSUM

                            </div>
                        </li>
                        <li>
                            <div class="counter"><span class="fa fa-smile-o"></span>
                                <div class="numeric stat-count">300</div>
                                LOREM IPSUM

                            </div>
                        </li>
                        <li>
                            <div class="counter"><span class="fa fa-smile-o"></span>
                                <div class="numeric stat-count">500</div>
                                LOREM IPSUM

                            </div>
                        </li>
                        <li>
                            <div class="counter"><span class="fa fa-smile-o"></span>
                                <div class="numeric stat-count">700</div>
                                LOREM IPSUM

                            </div>
                        </li>
                    </ul>
                </aside>
            </article>
        </div>

    </div>
</div>

<div class="padding-box" id="testimonial">
    <div class="container">
        <div class="row header">
            <article class="col-xs-12 textbox text-center">
                <div class="contents testimonial-carousel">
                    <div>
                        <figure class="shape fa fa-heart-o"></figure>
                        <h2 class="black">Lorem ipsum dolor sit amet</h2>
                        <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                            opposed to using ontent here content here making it look like readable English. Many desktop
                            publishing packages and web page editors now use.</p>
                        <p class="black"><span class="author-name">First name and Last name</span><br/>
                            <a href="#">www.clientwebsitehere.com</a></p>
                    </div>
                    <div>
                        <figure class="shape fa fa-heart-o"></figure>
                        <h2 class="black">Lorem ipsum dolor sit amet</h2>
                        <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                            opposed to using ontent here content here making it look like readable English. Many desktop
                            publishing packages and web page editors now use.</p>
                        <p class="black"><span class="author-name">First name and Last name</span><br/>
                            <a href="#">www.clientwebsitehere.com</a></p>
                    </div>
                    <div>
                        <figure class="shape fa fa-heart-o"></figure>
                        <h2 class="black">Lorem ipsum dolor sit amet</h2>
                        <p >Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                            opposed to using ontent here content here making it look like readable English. Many desktop
                            publishing packages and web page editors now use.</p>
                        <p class="black"><span class="author-name">First name and Last name</span><br/>
                            <a href="#">www.clientwebsitehere.com</a></p>
                    </div>

                </div>
            </article>
        </div>

    </div>
</div>

<?if($options['social_block_show']){?>
    <div class="padding-box blue-color">
        <div class="container">
            <div class="row header">
                <article class="col-xs-12 social-icons text-center">
                    <h2 class="white">Мы в социальных сетях</h2>
                    <ul class="list-inline">

                        <li><a href="<?=$options['link_facebook']?>"><span class="fa fa-facebook"></span>facebook</a></li>
                        <li><a href="<?=$options['link_twitter']?>"><span class="fa fa-twitter"></span>Twitter</a></li>
                        <li><a href="<?=$options['link_instagram']?>"><span class="fa fa-instagram"></span>Instagram</a></li>
                    </ul>

                </article>

            </div>

        </div>
    </div>

<?}?>
<?if($options['show_contact_info_block']){?>
    <div class="padding-box black2-color">
        <div class="container">
            <div class="row header">

                <aside class="col-sm-4 col-xs-12 small_box"><span class="fa fa-envelope"></span><a
                            href="mailto:<?=$options['email']?>"><?=$options['email']?></a></aside>
                <aside class="col-sm-5 col-xs-12 small_box"><span class="fa fa-home"></span><?=$options['adreess']?>
                </aside>
                <aside class="col-sm-3 col-xs-12 small_box"><span class="fa fa-phone-square"></span><a href="tel:<?=$options['phone']?>"><?=$options['phone']?></a></aside>

            </div>

        </div>
    </div>
<?}?>

<footer id="footer">
    <div class="container">
        <div class="row header">
            <div class="col-xs-12 copyright-text"><?=$options['footer_cript']?></div>
        </div>
        <a class="dmtop" href="#page-top"></a>

    </div>
</footer>


