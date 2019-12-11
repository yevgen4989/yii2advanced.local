<div id="sidebar-cart">
    <div class="sidebar-cart-header">
        <span class="cart-toggler float-right" data-toggle="cart">
            <svg width="17" height="17" viewBox="0 0 17 17">
                <defs>
                    <style>
                    .cls-1 {
                        fill-rule: evenodd;
                    }
                    </style>
                  </defs>
                  <path id="крестик" class="cls-1" d="M404.485,342.071l-1.414,1.414L396,336.414l-7.071,7.072-1.414-1.415L394.586,335l-7.071-7.071,1.414-1.414L396,333.586l7.071-7.071,1.414,1.414L397.414,335Z" transform="translate(-387.5 -326.5)"></path>
            </svg>
        </span>
        <p class=" color-secondary bold">Корзина</p>
    </div>
    <div id="sidebar-cart-content">
		<div>
			<p>Корзина пуста</p>
		</div>
	</div>
</div>

<div id="quickOrderModal" class="modal fade">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-body">
                <div class="modal-block-callback-form">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512; height: 16px; width: 16px;" xml:space="preserve">
							<g>
								<g>
									<path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249
										C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306
										C514.019,27.23,514.019,14.135,505.943,6.058z"></path>
								</g>
							</g>
                            <g>
                                <g>
                                    <path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636
									c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"></path>
                                </g>
                            </g>
                        </svg>
                    </button>

                    <div class="form">
						<form method="get" action="/get_call">
							<h5 class="bold">Закажите обратный звонок и мы <br> перезвоним вам в течение 15 минут</h5>
							<p>Ваш Имя</p>
							<div><input class="phone" name="name" placeholder="Иван Иванович" type="type"></div>
							<p>Ваш номер телефон</p>
							<div><input class="phone" name="phone" type="tel" placeholder="+7 (___) ___-__-__"></div>
							<button class="btn-theme green submit">Жду звонка</button>
						</form>
                    </div>
					<div class="error d-none mt-xlg">
                        <h2>Отправка запроса...</h2>
                        <p>После обработки запроса, Вы будете перенаправлены на главную страницу.</p>
                    </div>
					<!--
                    <div class="error d-none mt-xlg">
                        <h2>Произошла ошибка.</h2>
                        <p>Проверьте ваш интернет или попробуйте позднее.</p>
                    </div>

                    <div class="loading d-none">
                        <h2 style="padding: 50px 0">Обработка...</h2>
                    </div>

                    <div class="success  d-none">
                        <p class="h2">Ваша заявка успешно отправлена!</p>
                        <p>Наши менеджеры свяжутся с вами в ближайшее время.</p>
                    </div>
					-->
                </div>
            </div>
        </div>
    </div>
</div>