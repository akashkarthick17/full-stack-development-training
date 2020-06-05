// console.log('1');

// function delayFunction(callbackFn) {
//   setTimeout(() => {
//     console.log('2');
//     callbackFn();
//   }, 1000);
// }

// function func1() {
//   console.log('3');
//   console.log('4');
// }

// delayFunction(func1);

// Promise

console.log('Async function');

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject();
//   }, 1000);
// });

// promise
//   .then(() => {
//     console.log('success');
//   })
//   .catch(() => {
//     console.log('failure');
//   });


console.log('1');

const printTwo = new Promise((resolve) => {
  setTimeout(() => {
    resolve('2');
  }, 2000);
});

printTwo.then((paramFromResolve) => {
  console.log(paramFromResolve);
  console.log('3');
  console.log('4');
});
