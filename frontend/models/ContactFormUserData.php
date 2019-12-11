<?php
namespace frontend\models;

use Yii;
use yii\base\Model;
use common\models\User;

/**
 * Signup form
 */
class ContactFormUserData extends \yii\db\ActiveRecord
{
    public static function TableName()
    {
        return '{{yii_user}}';
    }

    public function rules()
    {
        return [
            [['username'], 'string', 'min' => 2, 'max' => 255],
            [['email'], 'string', 'max' => 255],
            [['last_name', 'name', 'sec_name', 'date_of_birth', 'address'], 'string', 'max'=>255],
            [['telephone'], 'string', 'max'=>50]
        ];
    }

    public function attributeLabels()
    {
        return [
            'username'=>'Логин',
            'email' => 'Email',
            'last_name'=>'Фамилия',
            'name'=>'Имя',
            'sec_name'=>'Отчество',
            'date_of_birth'=>'Дата рождения',
            'address'=>'Адрес',
            'telephone'=>'Телефон'
        ];
    }


}
