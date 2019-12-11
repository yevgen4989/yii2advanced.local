<?php
namespace frontend\models;

use yii\base\Model;

class Cart extends Model
{
    public static function deleteCartCookies($cookies)
    {
		if($cookies)
		{
			$cookies->remove('cart');
			unset($cookies['cart']);
			return true;
		}
		return "Ошибка! Не обнаружено cookie!"; exit;
    }
	
	public static function getFullPrice($get_cookies)
	{
		if($get_cookies)
		{
			$full_price = 0;
			if($cookie_cart = $get_cookies['cart']->value)
			{
				foreach($cookie_cart as $cart)
				{
				   $full_price += $cart['price'] * $cart['count'];
				}
			}
			return $full_price;
		}
		return "Ошибка! Не найдена запись 'cart' в cookie!"; exit;
	}
	
	public static function getAmountBasket($get_cookies)
	{
		if($get_cookies)
		{
			if($get_cookies = $get_cookies['cart']->value)
			{
				$count = 0;
				foreach($get_cookies as $cart)
				{
					$count += $cart['count'];
				}
				return $count;
			}
			return "Ошибка! Не найдена запись 'cart' в cookie!"; exit;
		}
		return "Ошибка! Не обнаружено cookie!"; exit;
	}
}
