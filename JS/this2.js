//绑定的优先级别
//new > 显式 > 隐式 > 默认
function foo (some) {
    this.a = some;
}

var obj1 = {
};


var bar = foo.bind(obj1);
bar(1);
console.log(obj1.a);

var baz = new bar(2);
console.log(baz.a);
