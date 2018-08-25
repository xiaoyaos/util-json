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
// var result = utilJson.findKeyByIndex(0,student,0);
// var result = utilJson.findObjectByKeys('sex',student);
// var result = utilJson.findObjectByKey('sx',student);
// var result = utilJson.levelObjectByKey("jhon","sex",student);
var result = utilJson.deleteProByKey(student,["jhon.sex","mary.score"]);
console.log(result);
