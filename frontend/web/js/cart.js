	function deleteProduct(id)
	{
		$.ajax({
			type: 'GET',
			url: '/cart/delete_cart',
			data: {
				'id':id,
			},
			success: function (data)
			{
				var data =  JSON.parse(data);
				$('.full_price').text(data['full_price']);
				$('#full_prepay').text(data['full_prepay']);
				$('#full_count').text(data['full_count']);
				$('.delete_product-'+id).remove();
				updateCountBlock(data['full_count']);
			}
		});
	}
	
	$('.in_cart').on('click',function(){
    var id = $(this).data('id');
        $.ajax({
			type: 'GET',
			url: '/cart/add_cart',
			data: {
				'price':$(this).data('price'),
				'img':$(this).data('img'),
				'name':$(this).data('name'),
				'id':id,
				'count':$('#count_'+id).val(),
			},
			success: function (data){
				var data =  JSON.parse(data);
				updateCountBlock(data['full_count']);
				$('.box-product').remove();
				$('#sidebar-cart-content').append(data[0]);
				$('.full_price').text(data['full_price']);
				$('#full_prepay').text(data['full_prepay']);
				$('#full_count').text(data['full_count']);        
			}
        });
    });
	
	$(document).on('click','.sidebar-plus-order',function(){
		var id = $(this).data('id');
		var text_count_product = $('.product_basket_text_id_'+id);
		var iteration = parseInt(text_count_product.text())+1;
		var price = $('.price_product_basket_id_'+id);
		price.text(parseInt(price.data('price'))*iteration+' руб.');
		text_count_product.text(iteration);
		var input_count_product = $('.product_basket_id_'+id);
		input_count_product.val(iteration);
		$.ajax({
			type: 'GET',
			url: '/cart/add_count_cart',
			data: {
				'id':id,
				'count':iteration,
			},
			success: function (data){
				var data =  JSON.parse(data);
				$('.full_price').text(data['full_price']);
				$('#full_prepay').text(data['full_prepay']);
				$('#full_count').text(data['full_count']);
				updateCountBlock(data['full_count']+1);
			}
        });
	});
	
	$(document).on('click','.sidebar-minus-order',function(){
		var id = $(this).data('id');
		var text_count_product = $('.product_basket_text_id_'+id);
		var iteration = parseInt(text_count_product.text())-1;
		iteration ? text_count_product.text(iteration) : text_count_product.text(1);
		if(iteration==0) iteration=1;
		var price = $('.price_product_basket_id_'+id);
		price.text(parseInt(price.data('price'))*iteration+' руб.');
		var input_count_product = $('.product_basket_id_'+id);
		input_count_product.val(iteration);
		$.ajax({
			type: 'GET',
			url: '/cart/add_count_cart',
			data: {
				'id':id,
				'count':iteration,
			},
			success: function (data){
				var data =  JSON.parse(data);
				$('.full_price').text(data['full_price']);
				$('#full_prepay').text(data['full_prepay']);
				$('#full_count').text(data['full_count']);
				console.log(iteration);
				//(iteration >= 1) ? updateCountBlock(data['full_count']-1) : updateCountBlock(data['full_count']-1);
				updateCountBlock(data['full_count']-1)
				
			}
        });
	});
	
	$(document).on('click','.sidebar-plus',function(){
		var id = $(this).data('id');
		var input_count_product = $('.product_basket_id_'+id);
		var iteration = parseInt(input_count_product.val())+1;
		var price = $('.price_product_basket_id_'+id);
		var input_text_count_product = $('.product_basket_text_id_'+id);
		input_text_count_product.text(iteration);
		price.text(parseInt(price.data('price'))*iteration+' руб.');
		input_count_product.val(iteration);
		$.ajax({
			type: 'GET',
			url: '/cart/add_count_cart',
			data: {
				'id':id,
				'count':iteration,
			},
			success: function (data){
				var data =  JSON.parse(data);
				$('.full_price').text(data['full_price']);
				$('#full_prepay').text(data['full_prepay']);
				$('#full_count').text(data['full_count']);
				updateCountBlock(data['full_count']+1);
			}
        });
	});
	
	$(document).on('click','.sidebar-minus',function(){
		var id = $(this).data('id');
		var input_count_product = $('.product_basket_id_'+id);
		var iteration = parseInt(input_count_product.val())-1;
		iteration ? input_count_product.val(iteration) : input_count_product.val(1);
		if(iteration==0) iteration=1;
		var price = $('.price_product_basket_id_'+id);
		price.text(parseInt(price.data('price'))*iteration+' руб.');
		var input_text_count_product = $('.product_basket_text_id_'+id);
		input_text_count_product.text(iteration);
		$.ajax({
			type: 'GET',
			url: '/cart/add_count_cart',
			data: {
				'id':id,
				'count':iteration,
			},
			success: function (data){
				var data =  JSON.parse(data);
				$('.full_price').text(data['full_price']);
				$('#full_prepay').text(data['full_prepay']);
				$('#full_count').text(data['full_count']);
				updateCountBlock(data['full_count']-1);
			}
        });
	});
	
	$('.cart-header').on('click',function(){
		$.ajax({
			type: 'GET',
			url: '/cart/view_cart',
			success: function (data){
				var data =  JSON.parse(data);
				$('.box-product').remove();
				$('#sidebar-cart-content').append(data[0]);
				$('.full_price').text(data['full_price']);
				$('#full_prepay').text(data['full_prepay']);
				$('#full_count').text(data['full_count']);
				updateCountBlock(data['full_count']);			
			}
		});
	});
	
	function updateCountBlock(count)
	{
		$('#block-count_ajax').empty();
		if(count!=0) $('#block-count_ajax').append("<div class='block-count'><span class='count' data-name='cart-count'>"+count+"</span></div>");
	}