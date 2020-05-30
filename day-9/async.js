console.log('1');

function delayFunction(callbackFn) {
  setTimeout(() => {
    console.log('2');
    callbackFn();
  }, 1000);
}

function func1() {
  console.log('3');
  console.log('4');
}

delayFunction(func1);