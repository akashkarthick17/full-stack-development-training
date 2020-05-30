
// Bad way
var obj = new Object();

obj.name = "akash";

var property = "name";

console.log(obj[property]);


// Good way
var obj2 = {
  name: 'akash',
  age: 23,
  dob: 'xxyyzz',
};

obj2.degree="CS"


console.log(obj2.age);
