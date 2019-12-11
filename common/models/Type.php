<?php
namespace common\models;

use Yii;
use yii\behaviors\TimestampBehavior;

class Type extends \yii\db\ActiveRecord
{
    public static function TableName()
    {
        return '{{yii_type_contents}}';
    }

    public function rules()
    {
        return [
            [['code'], 'string', 'max' => 20],
            [['name'], 'string', 'max' => 150],
            [['active'], 'integer']
        ];
    }

    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'code' => 'Информационный код блока',
            'name' => 'Название',
            'active' => 'Активность страницы'
        ];
    }


    private function translitIt()
    {
        $tr = [
            "А"=>"A","Б"=>"B","В"=>"V","Г"=>"G",
            "Д"=>"D","Е"=>"E","Ж"=>"J","З"=>"Z","И"=>"I",
            "Й"=>"Y","К"=>"K","Л"=>"L","М"=>"M","Н"=>"N",
            "О"=>"O","П"=>"P","Р"=>"R","С"=>"S","Т"=>"T",
            "У"=>"U","Ф"=>"F","І"=>'I',"і"=>"I",'ї'=>'j',"Х"=>"H","Ц"=>"TS","Ч"=>"CH",
            "Ш"=>"SH","Щ"=>"SCH","Ъ"=>"","Ы"=>"YI","Ь"=>"",
            "Э"=>"E","Ю"=>"YU","Я"=>"YA","а"=>"a","б"=>"b",
            "в"=>"v","г"=>"g","д"=>"d",'є'=>'e',"е"=>"e","ж"=>"j",
            "з"=>"z","и"=>"i","й"=>"y","к"=>"k","л"=>"l",
            "м"=>"m","н"=>"n","о"=>"o","п"=>"p","р"=>"r",
            "с"=>"s","т"=>"t","у"=>"u","ф"=>"f","х"=>"h",
            "ц"=>"ts","ч"=>"ch","ш"=>"sh","щ"=>"sch","ъ"=>"",
            "ы"=>"yi","і"=>"i","ь"=>"","э"=>"e","ю"=>"yu","я"=>"ya",
            " "=> "_","+"=>"_plus_","!"=>"_i_","%20"=>"_","Ё"=>"IO","ё"=>"io", '‘'=>'','\''=>'',
            ","=>'', "."=>'', "?" => '','('=>'',')'=>'','%'=>'','"'=>'','/'=>'',
        ];

        return substr(strtolower(strtr($this->name,$tr)), 0,50);
    }

    public static function getTypeContentPageById($id){
        return Type::find()->where(['id'=>$id])->asArray()->one();
    }

    public static function getTypeContentsPage()
    {
        return Type::find()->where(['active'=>1])->asArray()->all();
    }

    public static function getTypeContentPageByCode($code){
        return Type::find()->where(['code'=>$code, 'active'=>1])->asArray()->one();
    }
}