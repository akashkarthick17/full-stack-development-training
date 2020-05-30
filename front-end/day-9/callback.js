function function1(callbackFn) {
  console.log('function 1 called');
  var x = 1 + 1;
  x = x * 2;

  callbackFn(x);
}

function1(function (value) {
  console.log('callback function called' + value);
});

var arr = [1, 2, 3, 4, 5, 6];

arr.forEach(function (value, index) {
  console.log('array value - '+index +' '+ value);
});
