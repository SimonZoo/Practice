(function () {
    console.log(0o11 === 011);//八进制
})();

console.log(Number(0x11));//Number 转化为十进制

console.log('99 is finite: ' + Number.isFinite(99));
console.log('xx is finite: ' + Number.isFinite('xx'));

console.log('99 is not number: ' + Number.isNaN(99));
console.log('NAN: ' + Number.isNaN(NaN));
//这两个方法只对数值有效，对于非数值直接返回false
//传统的isFinite和isNAN先调用Number将非数值转化为数值，再判断

console.log(0.1 + 0.2);
console.log(Number.EPSILON);
//若误差小于该值，则认为得到了正确的结果
//实质是一个可接受范围的误差
function small_number(right, left) {
    return Math.abs(right-left) < Number.EPSILON;
}
console.log(small_number(0.1 + 0.2, 0.3));

var num1 = Math.trunc(4.11);
console.log(num1);

var num2 = Math.trunc('22.993');
console.log(num2);

//Math.trunc('foo');  返回NAN，空值，还有NAN也返回NAN

console.log('8 开立方 ：' + Math.cbrt(8));

console.log('32位无符号整数有多少个前导0 ：' + Math.clz32(0b00010000000000000000000000000000));
//只考虑整数部分

var num3 = Math.hypot(3, 4);
console.log(num3);
//平方和的平方根 ，若有一个值无法被转化为数值，返回NAN


console.log(Math.log1p(2));
console.log(Math.LN10);

console.log('pow : ' + Math.pow(99, 99) + '\n ** : ' + 99**99);
//** 指数运算符 ，但是对特别大的运算结果时，会有差异
//两种方法的实现不同