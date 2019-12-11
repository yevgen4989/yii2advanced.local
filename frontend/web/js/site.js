
$('.check').on('click',function(){
	if($(this).hasClass('active')){
		$(this).removeClass('active');
	}
	else
	{
		$(this).addClass('active');
	}
	if($('#check-cap-0 span').hasClass('active') && $('#check-cap-1 span').hasClass('active'))
	{
		$('.status-btn').append("<button type='submit' class='btn btn-theme yellow submit mt-xlg btn-card'>Перейти к оплате</button>");
	}
	else
	{
		$('.status-btn').empty();
	}
});

$('.checkbox-top').on('click',function(){
	if($(this).hasClass('toggled')){
		$('#delivery_method-input').val(1);
		$(this).removeClass('toggled');
		$('.status_delivery_address-input').append("<span class='h6 color-secondary mt-lg'>Адрес доставки</span><span><input name='Orders[delivery_address]' class='form-control mt-md' type='text' placeholder='Введите адрес доставки' value=''></span>");
	}
	else
	{
		$('#delivery_method-input').val(2);
		$(this).addClass('toggled');
		$('.status_delivery_address-input').empty();
	}
});