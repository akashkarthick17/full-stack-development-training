// Array

// 1st way - Bad way
var arr = new Array();

// 2nd way - Good way
var arr2 = [];

arr2[0] = "1st index";
arr2.push("2nd index");

// console.log(arr2);

arr2.forEach((element, index) => {
  console.log(element, index);
});


