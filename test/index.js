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
  "mary":{
    "sex":"woman",
    "age":18,
    "score":{
      "yy":150
    }
  }
};
var result = utilJson.findKeyForIndex(0,student,0);
// var result = utilJson.findObjectForKeys('sex',student);
// var result = utilJson.findObjectForKey('sx',student);
console.log(result);
