<?php
namespace common\models;

use Yii;

class GetCall extends \yii\db\ActiveRecord
{
    public static function TableName()
    {
        return '{{yii_get_call}}';
    }

    public function rules()
    {
        return [
            [['phone'], 'string', 'max' => 20],
            [['name'], 'string', 'max' => 30],
            [['time_get_call'], 'integer'],
        ];
    }

    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'phone' => 'Номер телефона',
            'name' => 'ФИО',
            'time_get_call' => 'Время заказа звонка',
        ];
    }
	
	public function beforeSave($insert) 
	{
		if (parent::beforeSave($insert)) 
		{
			$this->time_get_call = time();
			return true;
		}
		return false;
	}
}