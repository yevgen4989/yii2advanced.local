<?php
namespace common\models;

use Yii;

class Baskets extends \yii\db\ActiveRecord
{
    public static function TableName()
    {
        return '{{yii_basket}}';
    }

    public function rules()
    {
        return [
            [['id_order', 'id_product', 'price', 'amount','once_price'],'integer']
        ];
    }

    public function attributeLabels()
    {
        return [
            'id' => 'id',
            'id_order' => 'Номер заказа',
            'id_product' => 'id товара',
            'price' => 'Общая цена',
            'once_price' => 'Цена за еденицу',
            'amount' => 'Количество'
        ];
    }
	
	public static function setBasketCheckout($get_cookies,$id_order)
	{
		if($get_cookies)
		{
			if($cookie_cart = $get_cookies['cart']->value)
			{
				foreach($cookie_cart as $cart)
				{
					$model_basket = new Baskets();
					$model_basket->id_order = $id_order;
					$model_basket->id_product = $cart['id'];
					$model_basket->price = intval($cart['price'] * $cart['count']);
					$model_basket->once_price = intval($cart['once_price']);
					$model_basket->amount = intval($cart['count']);
					if(!$model_basket->save())
					{
						print_r($model_basket->getErrors()); exit;
					}
				}
				return true;
			}
			return "Ошибка! Данные из 'cart' в cookie - не найден!"; exit;
		}
		return "Ошибка! Не найдена запись 'cart' в cookie!"; exit;
	}
	
	public function setAmountPriceBasketData($postData)
	{
		if($postData)
		{
			$full_price = 0;
			foreach($postData as $id => $amount)
			{
				$model_basket = Baskets::findOne($id);
				if($model_basket)
				{
					$model_basket->amount = $amount;
					$model_basket->price = $model_basket->once_price*$amount;
					$full_price += $model_basket->price;
					if(!$model_basket->save())
					{
						print_r($model_basket->getErrors()); exit;
					}
				}
			}
			return $full_price;
		}
		return false;
	}
}