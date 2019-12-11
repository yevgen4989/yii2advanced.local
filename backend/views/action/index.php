<?php
use yii\grid\GridView;
?>
<div class='container'>
<h4>Список товаров</h4>
	<div class='col-md-12'>
		<div class='col-md-3'>
			<a href='/backend/web/action/create' class='btn btn-success'>Создать акцию</a>
		</div>
	</div>
</div>

<?=GridView::widget([
    'dataProvider' => $dataProvider,
    'tableOptions' => [
        'class' => 'table table-condensed',
    ],
    'columns' => [

		'id',
		[
			'label' => 'Изображение',
			'value' => function($data)
			{
				return "<img src='/frontend/web/site/{$data->image}' width='50px'>";
			},
			'format' => 'raw',
		],
		[
			'label' => 'Активность',
			'value' => function($data)
			{
				$active = ['Не активно','Активно'];
				if($data->active==0)
				{
					return "<span class='label label-danger'>Не активно</span>";
				}
				if($data->active==1)
				{
					return "<span class='label label-success'>Активно</span>";
				}
			},
			'format' => 'raw',
		],
		[
			'label' => 'Управление',
			'value' => function($data)
			{
				return "
					<a href='/backend/web/action/update?id={$data->id}' class='btn btn-info glyphicon glyphicon-pencil'></a>
					<a href='/backend/web/action/delete?id={$data->id}' class='btn btn-danger glyphicon glyphicon-remove' onClick='return confirm(\"Удалить акцию?\") ? true : false;'></a>
				";
			},
			'format' => 'raw',
		],
    ],
]);
?>