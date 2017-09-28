function foo({x, y = 7} = {}) {
    console.log(`x : ${x}, y : ${y}`);
}
foo();
foo({x:2,y:2});
foo({x:3});

function m1({x = 0, y = 0} = {}) {
    console.log(`x : ${x}, y : ${y}`);
}

function m2({x, y} = {x : 0, y : 0}) {
    console.log(`x : ${x}, y : ${y}`);
}

m1({x: 11, y: 12});
m2({x: 13, y: 14});

m1({});
m2({});

var x = 1;
function f(x, y = x) { //(x,y=x)单独形成作用域
    console.log(y);
}
f(2);

function f2(y = x) { //(y=x) 形成单独的作用域，此时x指向全局变量 x = 1，若无全局变量x，会报错
    let x  = 0;
    console.log(y);
}
f2();


var x = 1;
function foo3(x, y = function() { x = 2; }) {
    y();
    x = 3;
    console.log('log:' + x);
}

foo3();

function add(...values) {
    let sum = 0;
  
    for (var val of values) {
      sum += val;
    }
  
    return sum;
  }
console.log(add(2,3,4,4));

function push(array, ...items) {
    items.forEach(function(item) {
    array.push(item);
    console.log(item);
    });
}

var a = [];
push(a, 1, 2, 3);

var f = (a,b) => a + b;
console.log(f(11,2));

let numbers = (...nums) => nums;
console.log(numbers(1,2,3));

var 
s1 = 0,
s2 = 0;

function Timer() {
    this.s1 = 10;
    this.s2 = 10;
    setInterval(() => this.s1++, 1000);
    setInterval(function() {
        this.s2++;
    },1000);
}

var timer = new Timer();
setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);

function foo() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}

foo.call({id : 8080});//箭头函数导致this总是指向函数定义生效时所在的对象，执行时的对象才是window..
var id = 21;
  
