# util-json
about json Traversal operation

#### Example
```js
const utilJson = require('xy-util-json');
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
var who = utilJson.returnKeyForIndex(1,student);
console.log(who);
```
