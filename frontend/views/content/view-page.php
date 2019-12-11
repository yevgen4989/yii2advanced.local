
<?php if($content): ?>
    <?php $this->title = $content['name'];?>
<h1 class="bolder text-uppercase color-black text-center"><?=$content['name'];?></h1>
<div class="col-md-12">
	<?=$content['description'];?>
</div>
<?php endif; ?>

