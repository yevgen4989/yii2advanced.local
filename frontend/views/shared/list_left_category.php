<?php
use common\models\Category;
?>
<div id="left-category" class="col-md-2 left-categories">
	<?php if($categorys = Category::getAllCategory_ListObjects()): ?>
		<ul id="sidebar-nav" class="list-unstyled list-buttons">
			<?php foreach($categorys as $category): ?>
				<li class="item">
					<a class="smoothScroll link_category_<?=$category->url?>" href="/category/<?=$category->url?>">
						<?=$category->name?>
					</a>
				</li>
			<?php endforeach; ?>
		</ul>
	<?php endif; ?>
</div>