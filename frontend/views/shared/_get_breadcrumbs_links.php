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
								<?php if($links): ?>
									<?php foreach($links as $link): ?>
										<li><a href="/category/<?=$link->url?>"><?=$link->name?></a></li>
									<?php endforeach; ?>
								<?php endif; ?>
								<?php if($name_item): ?>
										<li><?=$name_item?></li>
								<?php endif; ?>
						   </ul>
						</div>
						<div class="search">
							<div class="icon-search"><input type="text" class="search-home" placeholder="Поиск блюд?">
								<a href="df">
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