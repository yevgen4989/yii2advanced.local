<?php $this->title='Корзина';?>
<div id="content">
    <div id="checkout">
        <section id="cart">
		<?php if($get_cookies): ?>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-12 left-block-cart">
                        <div class="left-block-2">
                            <div class="container">
                                <div class="row border-bottom-order">
                                    <div class="container">
                                        <div class="row">
                                            <p class="h1 Bold title-cart mt-md mb-lg ">Оформление заказа</p>
                                        </div>
                                    </div>
                                    <p class="h5 color-secondary bold my-order">Мой заказ</p>
                                </div>
                            </div>
                            <div class="border-bottom-order">
                                <div class="">
                                    <div class="col-md-12">
                                        <div class="order_contents">
										<?php if($get_cookies = $get_cookies['cart']->value): ?>
											<?php foreach($get_cookies as $cart): ?>
												<div class="item delete_product-<?=$cart['id']?>" >
													<div class="remover" onCLick="deleteProduct('<?=$cart['id']?>')" data-id="<?=$cart['id']?>">
														<svg width="17" height="17" viewBox="0 0 17 17">
															<path class="cls-1" d="M404.485,342.071l-1.414,1.414L396,336.414l-7.071,7.072-1.414-1.415L394.586,335l-7.071-7.071,1.414-1.414L396,333.586l7.071-7.071,1.414,1.414L397.414,335Z" transform="translate(-387.5 -326.5)"></path>
														</svg>
													</div>
													<div class="info">
														<p class="name"><a href="#" class="color-white"> <?=$cart['name']?></a><small class="count"><br><?=$cart['price']?> руб. x <?=$cart['count']?></small>
															<br><small class="count"><?=\common\models\Product::getWeightProduct($cart['id'])?> гр</small>
															<br>
														</p><img width="65" alt="" src="/frontend/web/uploads/items/<?=$cart['img']?>"></div>
													<div class="counts">
														<p class="h5 mb-md bold price price_product_basket_id_<?=$cart['id']?>" data-price="<?=$cart['price']?>"><?=$cart['price']*$cart['count']?><span> руб</span>.</p>
														<div class="controls" >
														<span class="control minus sidebar-minus-order" data-id="<?=$cart['id']?>"><svg width="14" height="4"><defs></defs><g><path fill="" stroke="none" d=" M 12.999763488769531 2.8750325441360474 C 12.999763488769531 2.8750325441360474 1.000518798828125 2.8750325441360474 1.000518798828125 2.8750325441360474 C 1.000518798828125 2.8750325441360474 1.000518798828125 1.1251370906829834 1.000518798828125 1.1251370906829834 C 1.000518798828125 1.1251370906829834 12.999763488769531 1.1251370906829834 12.999763488769531 1.1251370906829834 C 12.999763488769531 1.1251370906829834 12.999763488769531 2.8750325441360474 12.999763488769531 2.8750325441360474 Z"></path></g></svg></span>
														<div>
															<p class="qty product_basket_text_id_<?=$cart['id']?>"  data-price="<?=$cart['price']?>" ><?=$cart['count']?></p>
														</div><span data-id="<?=$cart['id']?>" class="control plus sidebar-plus-order"><svg width="16" height="16"><defs></defs><g><path fill="" stroke="none" d=" M 14.999565124511719 8.875032544136047 C 14.999565124511719 8.875032544136047 8.875144958496094 8.875032544136047 8.875144958496094 8.875032544136047 C 8.875144958496094 8.875032544136047 8.875144958496094 14.99972140789032 8.875144958496094 14.99972140789032 C 8.875144958496094 14.99972140789032 7.125114440917969 14.99972140789032 7.125114440917969 14.99972140789032 C 7.125114440917969 14.99972140789032 7.125114440917969 8.875032544136047 7.125114440917969 8.875032544136047 C 7.125114440917969 8.875032544136047 1.0002365112304688 8.875032544136047 1.0002365112304688 8.875032544136047 C 1.0002365112304688 8.875032544136047 1.0002365112304688 7.125137090682983 1.0002365112304688 7.125137090682983 C 1.0002365112304688 7.125137090682983 7.125114440917969 7.125137090682983 7.125114440917969 7.125137090682983 C 7.125114440917969 7.125137090682983 7.125114440917969 1.000448226928711 7.125114440917969 1.000448226928711 C 7.125114440917969 1.000448226928711 8.875144958496094 1.000448226928711 8.875144958496094 1.000448226928711 C 8.875144958496094 1.000448226928711 8.875144958496094 7.125137090682983 8.875144958496094 7.125137090682983 C 8.875144958496094 7.125137090682983 14.999565124511719 7.125137090682983 14.999565124511719 7.125137090682983 C 14.999565124511719 7.125137090682983 14.999565124511719 8.875032544136047 14.999565124511719 8.875032544136047 Z"></path></g></svg></span></div>
													</div>
												</div>
											<?php endforeach; ?>
										<?php endif; ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
					
                    <div class="col-md-6 col-sm-12 right-block-cart">
                        <div class="no-order">
                            <div class="inputs">
                                <form id="order_form" action="/cart/checkout" method="get">
                                    <input type="hidden" name="_token" value="FnFKQqC11lMDn1kGAbm8daKD81FvIlyNX6xuUVyK">
                                    <div id="delivery_type">
                                        <p class="h5 color-secondary mb-md">Способ доставки</p>
                                        <div class="checkbox checkbox-top"><span class="label-left dost">Доставка</span>
                                            <div class="body"><span class="toggle"></span></div><span class="label-right sam">Самовывоз</span></div>
                                        <div class="mt-lg"><span class="h6 color-secondary mt-lg">Ваши контактные данные</span>
                                            <input name="Orders[initials]" required class="form-control mt-md" type="text" placeholder="ФИО" value="">
                                            <div class="row mt-xlg">
                                                <div class="col-md-6 col-6 rewrite-padding-right">
												<input class="phone" required type="tel" name="Orders[phone]" placeholder="+7 (___) ___-__-__">
                                               
                                                </div>
                                                <div class="col-md-6 col-6 rewrite-padding-left mb-xlg">
                                                    <input class="form-control" required  placeholder="Электронная почта*" type="email" name="Orders[email]" value="">
                                                </div>
                                            </div>
                                            <div class="status_delivery_address-input"><span class="h6 color-secondary mt-lg">Адрес доставки</span>
                                                <span>
													<input required name="Orders[delivery_address]"  class="form-control mt-md" type="text" placeholder="Введите адрес доставки" value="">
												</span>
											</div>
                                        </div>
                                    </div>
                                    <div id="date_options">
									   <p class="h5 color-secondary mt-lg">Дата и время мероприятия</p>
										<div class="flex flex-row">
                                            <div>
                                                <div class="react-datepicker-wrapper">
                                                    <div class="react-datepicker__input-container">
                                                          <input type="date" name="Orders[delivery_date_d]" value="<?=strftime('%Y-%m-%d', time())?>">
														  <input type="time" name="Orders[delivery_date_t]" value="<?=strftime('%H:%M', time())?>" min="9:00" max="18:00" >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="border-bottom-cart"></div>
                                        <p class="h5 color-secondary mt-lg" >Комментарий</p>
                                        <textarea placeholder="Краткое описание, пожелание к заказу" id="comment" name="Orders[comment]" cols="20" rows="5"></textarea>
										<input type="hidden" name="Orders[payment_method]" value="2">
										<input type="hidden" name="Orders[delivery_method]" id="delivery_method-input" value="1">
                                    </div>
                                    <div class="border-bottom-cart mb-xlg"></div>
                                    <div id="pay_options">
                                        <div class="flex-row mt-xlg">
                                            <p class="h5">Сумма к оплате: <span class="color-secondary"><span class="full_price"><?=$full_price?></span>.00руб.</span></p>
                                        </div>
                                        <div class="border-bottom-cart"></div>
                                        <div class="mt-xlg align-items-center" id="check-cap-0"><span class="check mr-sm"></span><span class="cap">Я согласен с <u><a class="cap" href="<?=$options->cor_1?>">условиями доставки*</a></u></span></div>
                                        <div class="align-items-center mt-sm" id="check-cap-1"><span class="check mr-sm"></span><span class="cap">Я согласен с <u><a class="cap" href="<?=$options->cor_2?>">условиями использования персональных данных</a></u>*</span></div>
                                        <span class="status-btn"></span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
			<?php endif; ?>
        </section>
    </div>
</div>