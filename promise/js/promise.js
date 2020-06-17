/*
function promisetest(num, timer = 0) {
  return new Promise(function (resolve, reject) {
    if (num) {
      setTimeout(function () {
        resolve(`${num}: 成功`)
      }, timer)
    } else {
      reject('失敗')
    }
  })
}

const promises = [promisetest(1), promisetest(2), promisetest(0, 500)];
Promise.any(promises)
  .then(result => console.log(result))
  .catch(e => console.log(e));
*/


function p1(x) {
  return new Promise((resolve, reject) => {
    resolve(x)
  })
}

function p2(y) {
  return new Promise((resolve, reject) => {
    reject(y)
  })
}

try {
  throw new AggregateError([
    new Error("some error"),
  ], 'Hello');
} catch (e) {
  console.log(e instanceof AggregateError); // true
  console.log(e.message);                   // "Hello"
  console.log(e.name);                      // "AggregateError"
  console.log(e.errors);                    // [ Error: "some error" ]
}








/*
function p1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('resolve-1'), 500)
  })
}
p1().then(result => result)
  .catch(e => e);


function p2() {
  return new Promise((resolve, reject) => {
    resolve('resolve-2')
  })
}
p2().then(result => result)
  .catch(e => e);


function p3() {
  return new Promise((resolve, reject) => {
    reject('reject-3');
  })
}
p3().then(result => result)
  .catch(e => e);

function p4() {
return new Promise(function(resolve, reject) {
  setTimeout( function() {
    reject('error')
  } , 2000)
})
}

Promise.race([p1(), p2(), p3(), p4()])
.then(result => console.log(result))
.catch(error => console.log(error))

Promise.allSettled([p1(), p2(), p3()])
.then(result => console.log(result))
.catch(error => console.log(error))

Promise.race([p1(), p2(), p3()])
.then(result => console.log(result))
.catch(e => console.log(e));
*/


/*
function promisetest(num, timer = 0) {
  return new Promise(function (resolve, reject) {
    if (num) {
      setTimeout(function () {
        resolve(`${num}: 成功`)
      }, timer)
    } else {
      reject('失敗')
    }
  })
}

const promises = [promisetest(1), promisetest(2), promisetest(3, 3000)];
Promise.all(promises)
  .then(result => console.log(result))
  .catch(e => console.log(e));
*/
