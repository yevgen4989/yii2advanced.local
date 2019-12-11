<?php
namespace frontend\models;

use yii\base\Model;
use common\models\Product;
use common\models\Options;

class SendMessage extends Model
{
    public static function sendOrder($email,$get_cookies,$id_order)
    {
		if($get_cookies and $email)
		{
			if($cookie_cart = $get_cookies['cart']->value)
			{
				$options = Options::getOptionsObject();
				$full_price = 0;
				$message = "Ваш заказ №{$id_order} успешно сформирован!";
				$message .= "<table><th>Название товара</th><th>Цена за еденицу</th><th>Количество</th><th>Сумма</th>";
				foreach($cookie_cart as $cart)
				{
					if($name_product = Product::getProduct($cart['id']))
					{
						$message .= "
							<tr>
								<td>{$name_product->name}</td>
								<td>{$cart['once_price']}</td>
								<td>{$cart['count']}</td>
								<td>".$cart['once_price']*$cart['count']."</td>
							</tr>
						";
						$full_price += $cart['once_price']*$cart['count'];
					}
				}
				$message .= "<p><b>Итого: {$full_price}</b></p>";
				$message .= "</table>";
				$headers = 'From: <'.$options->email.'>' . "\r\n";
				$headers .= "Content-type: text/html; charset=\"utf-8\"";
				return mail($email, "Ваш заказ по доставке еды №{$id_order} успешно сформирован!",$message, $headers) ? true : false;
			}
		}
		return "Ошибка! Не обнаружено cookie или не верный email для отправки письма на почту!";
    }
	
	public static function sendWaitCall($phone,$name)
	{
		$options = Options::getOptionsObject();
		$headers = 'From: <'.$options->email.'>' . "\r\n";
		$headers .= "Content-type: text/html; charset=\"utf-8\"";
		return mail($options->email, "Заказ звонка {$phone}","Запрос на звонок от {$name} - {$phone}", $headers) ? true : false;
	}
}
