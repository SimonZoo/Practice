let s = Symbol('zoo');
console.log(typeof s);
console.log(s);


let a ={
    [s] : 'Simon'
}

console.log(a[s]);

let b = {};
b.s = 'b.s';//这种写法会把b的属性值当成字符串
console.log(typeof b.s);
console.log(typeof b[s]);


let c1 = Symbol('foo');
let c2 = Symbol('foo');

console.log(c1 === c2);

let name = Symbol('name');

console.log(name);
