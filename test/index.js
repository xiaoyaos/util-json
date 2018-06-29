'use strict'

const utilJson = require('../index');
var student = {
  "jhon":{
    sex:"man",
    age:19
  },
  mary:{
    sex:"woman",
    age:18
  }
};
var who = utilJson.returnKeyForIndex(0,student);
console.log(who);
