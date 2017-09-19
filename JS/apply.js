
var Quo = function(string) {
    this.status = string;
};

Quo.prototype.get_status = function() {
    return this.status;
}

var myQuo = new Quo('I am Simon.');//构造器函数
console.log(myQuo.get_status());

var returnQuo = new Quo('retuen this?');
console.log(returnQuo);//return 的是this

var statusObject = {
    status: "It's OK "
};
var ok = Quo.prototype.get_status.apply(statusObject);
//apply调用，第一个参数给要绑定this的值，第二个是一个参数数组。
console.log(ok);

var array = [3, 5];
var add = function(a, b) {   
    return a+b;
}
var sum = add.apply(null, array);//apply 调用
console.log(sum);
console.log(add);

