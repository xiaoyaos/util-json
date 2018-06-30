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
// var result = utilJson.returnKeyForIndex(0,student);
// var result = utilJson.findObjectForKeys('sex',student);
var result = utilJson.findObjectForKey('yy',student);
console.log(result);
