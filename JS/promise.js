  
//then在所有同步结束后调用
let promise = new Promise(function(resolve, reject) {
    console.log('Promise');
    resolve();
});

promise.then(function() {
    console.log('resolved');
});

console.log('hello');



// //p2状态由p1决定
// let p1 = new Promise(function(resolve, reject) {
//     setTimeout(() => reject(console.log('here p1')), 3000);
// });

// let p2 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(p1), 1000);
// });

// p2.then(result => console.log(`p2 - then - result :${result}`));
  

//catch写法
//写法一：
var promise_2 = new Promise(function(resolve, reject) {
    reject(new Error ('I am Error.'));
})
promise_2.catch(function(error) {
    console.log(error);
});

//写法二
var promise_3 = new Promise(function(resolve, reject) {
    try {
        throw new Error('I am Error 3');
    } catch(e) {
        reject(e);
    }
});

promise_3.catch(function(error) {
    console.log(error);
});


//如果c1，c2有自己的catch，那Promise.all的catch不执行
//下例中如果c2没有自己的catch，那么会调用Promise.all的catch
var c1 = new Promise(function(resolve, reject) {
    resolve('hello');
})
.then(result => console.log(result))
.catch(e => e);

var c2 = new Promise(function(resolve, reject) {
    throw new Error('I am Error in c2');
})
.then(result => result)
.catch(e => console.log(e));

Promise.all([c1, c2])
.then(result => console.log('Here is result:' + result))
.catch(e => console.log('Here is : error' + e));

