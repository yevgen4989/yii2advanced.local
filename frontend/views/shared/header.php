<?php $actions = \common\models\Actions::find()->where(['active'=>1])->all();?>
<?php //if ($actions!=''):?>
<!--
    <div style="display: block; max-width: 1360px; margin: 0 auto">
        <div class="bxslider">
            <?php foreach($actions as $action):?>
                <div class="slide"><a href=""><img src="frontend/web/site/<?=$action->image?>" title=""></a></div>
            <?php endforeach;?>
        </div>
    </div>
    -->
<?php //else:?>
    <div id="home-promo" class="zaka_banner">
        <div class="container text-md-center">
            <p class="h1 promo"><?=$options->promo?></p>
            <span class="text-center promo-text">
                <?=$options->promo_text?>
            </span>
            <!--
            <br>
            <a href="#quickOrderModal" class="btn-theme back-call" data-toggle="modal">Обратный звонок</a>
            -->
        </div>
    </div>
    <style>
        #home-promo {
            background: url(/frontend/web/site/<?=$options->image_header?>) no-repeat;
            background-size: cover;
            padding: 18px 0;
        }
    </style>
<?php //endif;?>
<div id="search-area" style="height: 30px;">
	<div class="search-container" style="top: 0px;">
		<div class="container">
			<div class="row">
				<div class="col-md-2"></div>
				<div class="col-md-10">
					<div class="items">
						<div class="breadcrumbs">
							<ul>
								<li><a href="/">Главная</a></li>
						   </ul>
						</div>
						<div class="search">
							<div class="icon-search">
							<input type="text" class="search-home" id="search-input" placeholder="Поиск блюд">
								<a href="javascript:void(0)" id="search_product_lupe">
									<svg width="19.41" height="20" viewBox="0 0 19.41 20">
										<defs></defs>
										<path id="search" class="cls-1" d="M1886.96,363.556a7.631,7.631,0,1,0-1.04.951l5.78,5.783a0.7,0.7,0,0,0,.49.212,0.686,0.686,0,0,0,.5-0.212,0.715,0.715,0,0,0,0-1Zm-12.06-5.279a6.365,6.365,0,1,1,6.37,6.37A6.376,6.376,0,0,1,1874.9,358.277Z" transform="translate(-1873.5 -350.5)"></path>
									</svg>
								</a>
							</div>
							<div class="results"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<?php $js = "
$('#search_product_lupe').on('click', function(){
	var search = $('#search-input').val();
	console.log(search);
	$.ajax({
			type: 'GET',
			url: '/site/search',
			data: {
				'search':search,
			},
			success: function (data){
				$('.product-info').empty();
				$('.product-info').append(data);
			}
        });
	//$('.product-info').empty();
});
";
$this->registerJS($js);
?>

