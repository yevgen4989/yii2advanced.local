<?php
namespace common\models;

use Yii;

class CashlessPayments extends \yii\db\ActiveRecord
{
    public static function TableName()
    {
        return '{{yii_cashless_payments}}';
    }

    public function rules()
    {
        return [
            [['id_order', 'ynn'], 'integer'],
			[['byk'], 'string', 'max' => 20],
			[['checking_account'], 'string', 'max' => 50],
			[['ogrn'], 'string', 'max' => 150],
			[['head_accountant'], 'string', 'max' => 200],
			[['legal_address'], 'string'],
            [['name_company','name_bank'], 'string', 'max' => 255],
        ];
    }

    public function attributeLabels()
    {
        return [
            'id' => 'id',
            'ynn' => 'ИНН',
            'ogrn' => 'ОГРН',
            'head_accountant' => 'Руководитель / бухгалтер',
            'name_company' => 'Наименования компании',
            'byk' => 'БИК',
            'legal_address' => 'Юридический адрес',
            'name_bank' => 'Наименования банка',
        ];
    }
}