'use strict'
const assert = require('assert').strict;

class uJson {
  constructor(){}
  /**
   * The key to find the object at a given location
   * @param {index}
   * @param {object}  operation object
   * @return {string} return object key
   */
  returnKeyForIndex(index,object){
    assert.strictEqual('number',typeof index,"index must be a number");
    assert.strictEqual('object',typeof object,"object must be a object");

    let num = 0;
    let key = '';
    for(let k in object){
      if(num === index){
        key = k;
        break;
      }
      num++;
    }
    if(key === ''){
      assert.fail('index out of range length is '+num);
    }else{
      return key;
    }

  }
}
module.exports = new uJson();
