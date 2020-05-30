// Arrow function

var func1 = () => {
  console.log('arrow function');
};

func1();

// Spread operator
var obj1 = { name: 'akash', age: 23 };
var obj2 = { dob: 'xxyyzz' };

console.log(obj1);
console.log(obj2);

var finalObj = { ...obj1, ...obj2 };

console.log(finalObj);

// let and const
let test1 = 0;
const test2 = 1;

function outerFn() {
  
  if(true) {
    var x = 1;
  }
  
  console.log(x);
}

outerFn();
