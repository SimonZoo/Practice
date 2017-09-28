var a = [];

for (let i = 0; i < 10; i += 1) {
    a[i] = function () {
        console.log(i);
    }
}

console.log(a[2]());//2 

for (var i = 0; i < 10; i += 1) {
    a[i] = function () {
        console.log(i);
    }
}

console.log(a[2]());//10 

var tmp;

if (1) {
    // tmp = 12;  //TDZ报错
    
    let tmp;
    console.log(tmp);//undefined

    tmp = 11;
    console.log(tmp);//11
}


let [b, c, d] = [1, 3, 5];
console.log(d);


let { foo: baz } = { foo: "Simon", bar: "aaa" };
console.log(baz);
//被定义的是baz ，foo可以看作是默认的格式
//如果赋值对象也为foo时，即形式为 foo：foo，那么可以简写为foo
//这种形式  let {foo} = {...}



