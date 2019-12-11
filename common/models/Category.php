<?php
namespace common\models;

use Yii;
use yii\helpers\ArrayHelper;
use common\models\RelationsProductCategory;
use common\models\Product;

class Category extends \yii\db\ActiveRecord
{
    public $country;

    public static function TableName()
    {
        return '{{yii_category}}';
    }

    public function rules()
    {
        return [
            [['name','url'], 'string', 'max' => 150],
            [['sort','active'], 'integer'],
        ];
    }

    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Название категории',
            'sort' => 'Сортировка',
            'active' => 'Активность',
            'url' => 'url',
        ];
    }
	
	public static function getAllCategory_ListArray()
	{
		return ArrayHelper::map(Category::find()->orderBy(['sort'=>SORT_DESC])->asArray()->all(),'id','name');
	}
	
	public static function getAllCategory_ListObjects()
	{
		return Category::find()->select('id,name,url')->where(['active'=>1])->orderBy(['sort'=>SORT_DESC])->all();
	}
	
	public static function getListProductForCategory($id_category)
	{
		$model_products = RelationsProductCategory::find()->select('id_product')->leftJoin('yii_product as product','product.id = yii_relations_product_category.id_product')
		->where(['product.active'=>1,'yii_relations_product_category.id_category'=>$id_category])->orderBy('rand()')->limit(6)->all();
		return $model_products;
	}
	
	public function getProductsForCategory($id_category)
	{
		$model_products = Product::find()->leftJoin('yii_relations_product_category as relation','relation.id_product = yii_product.id')
		->where(['yii_product.active'=>1,'relation.id_category'=>$id_category])->all();
		return $model_products;
	}
	
	public function beforeSave($insert) 
	{
		if (parent::beforeSave($insert)) 
		{
            if(empty($this->url) || trim($this->url)=='') 
			{
                $this->url = $this->translitIt();
            }
            if(empty($this->sort) || trim($this->sort)=='') 
			{
                $this->sort = 0;
            }
			return true;
		}
		return false;
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
}