'use strict'

const utilJson = require('../index');

var student = {
  "jhon":{
    "sex":'man',
    "age":19,
    "score":{
      "sx":99,
      "yw":88
    }
  },
  "mary":[{
    "age":18,
    "score":{
      "yy":150
    }
  },
  {
    "sex":"woman",
    "age":18,
    "score":{
      "yy":150
    }
  }]
};
var a = { tag_no: 'OD1430',
  order_type: 0,
  fetch_type: 2,
  operate_type: 0,
  sender_place_id: 101000,
  receiver_place_id: 14,
  sender_info:
   { city: 'Hangzhou',
     name: 'xu Meiqi',
     phone: '057855678',
     address: 'xi xi ba fang cheng',
     city_id: 101000,
     country: 'China',
     postcode: '000000',
     province: 'Zhejiang',
     province_code: '330000',
     country_id: 10,
     province_id: 1010,
     country_mark: 'CN' },
  receiver_info:
   { city: 'ny',
     name: 'jack',
     phone: '325465',
     mobile: '17816891429',
     address: 'adasdkasj   adasadd',
     country: 'United States',
     postcode: '10081',
     province: 'NY',
     country_id: 14,
     country_mark: 'US' },
  goods_type: 0,
  goods_weight: 2.3,
  goods_long: 10,
  goods_wide: 10,
  goods_high: 10,
  goods_count: 1,
  goods_entrys:
   [ { unit: 0,
       count: 1,
       price: 1,
       weight: 1,
       name_cn: '连衣裙',
       name_en: 'YIFU',
       per_price: 1 } ],
  goods_extend_info:
   { kind: 2,
     duty_paid: false,
     has_battery: false,
     undelivery_option: 2 },
  goods_lists: [] }


// var result = utilJson.findKeyByIndex(0,student,0);
// var result = utilJson.findObjectByKeys('sex',student);
// var result = utilJson.findObjectByKey('sx',student);
// var result = utilJson.levelObjectByKey("jhon","sex",student);
var result = utilJson.deleteProByKey(a,[ 'comment',
  'goods_lists.0.comment',
  'goods_lists.0.count',
  'goods_lists.0.id',
  'tag_no',
  'receive_address_id',
  'receiver_info.country',
  'receiver_info.country_mark',
  'send_address_id',
  'store_info',
  'transport_type',
  'goods_lists.0.tag_no',
  'goods_lists.0.child_lists' ]);
console.log(result);
