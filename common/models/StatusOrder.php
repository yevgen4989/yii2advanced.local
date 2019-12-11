<?php
namespace common\models;

use Yii;
use yii\helpers\ArrayHelper;

class StatusOrder extends \yii\db\ActiveRecord
{
    public static function TableName()
    {
        return '{{yii_status_order}}';
    }

    public function rules()
    {
        return [
            [['active'], 'integer'],
            [['name'], 'string', 'max' => 100],
        ];
    }

    public function attributeLabels()
    {
        return [
            'name' => 'Название',
            'active' => 'Активность статуса',
        ];
    }
	
	public static function getStatusList_Array()
	{
		return ArrayHelper::map(StatusOrder::find()->where(['active'=>1])->asArray()->all(),'id','name');
	}
	
	public function getNameStatus($id)
	{
		$model_status_order = StatusOrder::findOne($id);
		if($model_status_order)
		{
			return $model_status_order->name;
		}
		return 'Не определено';
	}
}