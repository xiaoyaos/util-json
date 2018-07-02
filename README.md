# util-json
about json Traversal operation

#### Example
```js
const utilJson = require('util-json');
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
var result = utilJson.levelObjectByKey("jhon","sex",student);
console.log(result);
```
