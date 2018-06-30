'use strict'
const assert = require('assert').strict;

class uJson {
  constructor(){}
  /**
   * The key to find the object at a given location
   * @param {number}   index
   * @param {object}  operation object
   * @return {string} return object key
   */
  findKeyForIndex(index,object){
    assert.strictEqual('number',typeof index,"type error! first parameter must be a number");
    assert.strictEqual('object',typeof object,"type error! second parameter must be a object");

    let num = 0;
    let key = '';
    for(let k in object){
      if(num === index){
        key = k;
        break;
      }
      num++;
    }

    if(key === '' && num != 0){
      assert.fail('index out of range length is '+num);
    }else{
      return key;
    }
  }

  /**
   * Specifies the key array lookup and return object
   * @param {array or string} key array or single key string
   * @param {object} operation object
   * @return {object} found object or value
   */
  findObjectForKeys(keys,object){
    // assert.strictEqual('object',typeof object,"type error! second parameter must be a object");
    let array = [];
    if(typeof keys === 'string'){
      array = [keys];
    }else if(Array.isArray(keys)){
      array = keys;
    }else{
      //Unrecognized parameter type
      assert.strictEqual(1,2,"type error! first parameter must be a array or string");
      // return false;
    }
    let obj = object[array[0]];
    array.splice(0, 1);
    if(obj){
      if(array.length <= 0){
        //found tag and return
        return obj;
      }else{
        return this.findObjectForKeys(array,obj);
      }
    }else{
      return false;  //not found key
    }
  }

  /**
   * Specifies the key value jump lookup and return accord first object
   * @param {string} key string
   * @param {object} operation object
   * @return {object} found object or value
   */
  findObjectForKey(key,object){
    // assert.strictEqual('string',typeof key,"type error! first parameter must be a array or string");
    // assert.strictEqual('object',typeof object,"type error! second parameter must be a object");
    //check found object type
    if(typeof object === 'object'){
      for(let k in object){
        if(k === key){
          return object[key];
        }else{
          let result = this.findObjectForKey(key,object[k]);
          if(result){
            return result;
          }else{
            continue;
          }
        }
      }
    }else{
      return false;
    }
  }


}
module.exports = new uJson();
