<?php
namespace common\models;

use Yii;
use yii\behaviors\TimestampBehavior;
use yii\web\UploadedFile;
use yii\imagine\Image;
use common\models\Baskets;

class Urok extends \yii\db\ActiveRecord
{
	public $image_file;
    public static function TableName()
    {
        return '{{urok}}';
    }

    public function rules()
    {
        return [
			[['image_file'], 'file', 'extensions' => 'png, jpg', 'skipOnEmpty' => true],
            [['name'], 'string', 'max' => 150],
            [['description','image','url'], 'string', 'max' => 255],
            [['weight', 'price', 'active'], 'integer'],
            [['consist'], 'string'],
        ];
    }

    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Название товара',
            'price' => 'Цена',
            'image_file' => 'Изображение',
            'image' => 'Изображение',
            'weight' => 'Вес',
            'active' => 'Наличие товара',
            'description' => 'Описание товара',
            'consist' => 'Состав',
            'url' => 'url',
        ];
    }

}