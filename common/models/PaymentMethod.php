<?php
namespace common\models;

use Yii;

class PaymentMethod extends \yii\db\ActiveRecord
{
    public static function TableName()
    {
        return '{{yii_payment_method}}';
    }

    public function rules()
    {
        return [
            [['name'], 'string', 'max' => 255],
            [['active'], 'integer']
        ];
    }

    public function attributeLabels()
    {
        return [
            'id' => 'id',
            'name' => 'Название метода',
            'active' => 'Активность',
        ];
    }
}