'use strict'
const assert = require('assert').strict;

class uJson {
  constructor(){}
  /**
   * The key or value to find the object at a given location
   * @param {number}   index
   * @param {object}  operation object
   * @param {number}  type 0:return key 1:return value
   * @return {string} return object key
   */
  findKeyByIndex(index,object,type = 0){
    assert.strictEqual('number',typeof index,"type error! first parameter must be a number");
    assert.strictEqual('object',typeof object,"type error! second parameter must be a object");
    assert.strictEqual('number',typeof type,"type error! thirdly parameter must be a number");
    let num = 0;
    let result = '';
    for(let k in object){
      if(num === index){
        if(type === 0){
          result = k;
        }else if(type === 1){
          result = object[k];
        }else{
          assert.fail('thirdly parameter Optional type 0 or 1 please read api DOC');
        }
        break;
      }
      num++;
    }

    if(result === '' && num != 0){
      assert.fail('index out of range length is '+num);
    }else{
      return result;
    }
  }

  /**
   * Specifies the key array lookup and return object
   * @param {array or string} key array or single key string
   * @param {object} operation object
   * @return {object} found object or value
   */
  findObjectByKeys(keys,object){
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
        return this.findObjectByKeys(array,obj);
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
  findObjectByKey(key,object){
    // assert.strictEqual('string',typeof key,"type error! first parameter must be a array or string");
    // assert.strictEqual('object',typeof object,"type error! second parameter must be a object");
    //check found object type
    // console.log(object);
    if(typeof object === 'object'){
      for(let k in object){
        if(k === key){
          return object[key];
        }else{
          let result = this.findObjectByKey(key,object[k]);
          if(result){
            return result;
          }else{
            continue;
          }
        }
      }
    }
    return false;
  }

  /**
   * The object that specifies the key is promoted one level
   * @param {string} parentKey parent key
   * @param {string} childKey child
   * @param {object} operation object
   * @param {bool} isdelete default:false  
   * @return {object} modify object
   */
   levelObjectByKey(parentKey,childKey,object,del = false){
     assert.strictEqual('string',typeof parentKey,"type error! first parameter must be a array or string");
     assert.strictEqual('string',typeof childKey,"type error! first parameter must be a array or string");
     assert.strictEqual('object',typeof object,"type error! second parameter must be a object");
     var obj = this.findObjectByKey(parentKey,object);
     if(del){
       delete object[parentKey];
     }
     object[childKey] = obj[childKey];
     return object;
   }

}
module.exports = new uJson();
