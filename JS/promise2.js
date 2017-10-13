const f1 = () => console.log('now1');
(async() => f1())();//异步则用.then()，捕获错误用catch
console.log('next1');


const f2 = () => console.log('now2');
(
    () => new Promise(
        resolve => resolve(f2())
    )
)();
console.log('next2');

// const f3 = () => console.log('now3');
// Promise.try(f3);
// console.log('next3'); 
//提案