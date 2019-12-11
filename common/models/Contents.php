<?php
namespace common\models;

use Yii;
use yii\behaviors\TimestampBehavior;
use yii\imagine\Image;
use yii\web\UploadedFile;

class Contents extends \yii\db\ActiveRecord
{
    public $image_file;
    public static function TableName()
    {
        return '{{yii_contents}}';
    }

    public function rules()
    {
        return [
            [['code'], 'string', 'max' => 20],
            [['name'], 'string', 'max' => 150],
            [['url'], 'string', 'max' => 255],
            [['image_header'], 'string', 'max' => 255],
            [['description'], 'string'],
            [['image_file'], 'file', 'extensions' => 'png, jpg', 'skipOnEmpty' => true],
            [['active', 'type'], 'integer'],
        ];
    }

    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'image_file' => 'Картинка',
            'image_header'=>'Картинка',
            'code' => 'Информационный код блока',
            'name' => 'Название',
            'active' => 'Активность страницы',
            'description' => 'Описание',
            'url' => 'URL страницы',
            'type' => 'Тип',
        ];
    }


	public function beforeSave($insert) 
	{
		if (parent::beforeSave($insert)) 
		{
            if(empty($this->url) || trim($this->url)=='') 
			{
                $this->url = $this->translitIt();
            }
            $dir = Yii::getAlias('@frontend/web/site/');
            $image_file = UploadedFile::getInstance($this, 'image_file');
            if (isset($image_file->name) && trim($image_file->name) != '')
            {
                $image_header = time() . $image_file->name;
                $this->image_header = $image_header;
                if ($this->validate())
                {
                    $uploaded = $image_file->saveAs($dir . $image_header);
                    Image::thumbnail(Yii::getAlias($dir . $image_header),2000, 2000)->save(Yii::getAlias($dir . $image_header), ['quality' => 80]);
                }
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
	
	public static function getContentsPage()
	{
		return Contents::find()->where(['active'=>1])->asArray()->all();
	}
	
	public static function getContentPage($url)
	{
		return Contents::find()->where(['url'=>$url])->asArray()->one();
	}

	public static function getContentPageByCode($code){
        return Contents::find()->where(['code'=>$code, 'active'=>1])->asArray()->one();
    }
}