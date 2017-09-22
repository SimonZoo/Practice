//默认绑定
var func = function () {
    var x = 10;
    console.log('this in func: ' + this);//这里的this是指向global的
    return this.x;
}
console.log(func());
//undefined,因为此时this指向的是全局变量global 
//无法改变global的值，给他加一个x: 9的属性，所以global没有x，返回undefined


//再看一个例子
var name = 'String global';
function outFunction() {
    console.log('in outFunction - this.name : ' + this.name);
    name = 'Simon'; //给这句加上this的话就是创建了一个对象，该对象的name = Simon 在node会输出Simon

    function inFunction() {
        console.log('is inFunction : ' + this.name);
    }   
    inFunction();
}
outFunction();
//在浏览器下
//thisTest()中的this仍旧绑定到window对象，所以输出‘String global’， 下一个输出Simon,因为name的值给更新了
//而node环境下用上this之后都是undefine，如果不用this，那就也是变量和重新赋值了





//隐性绑定
function say () {
    console.log(this.name);
}
var objA = {
    name : 'objA',
    say : say
}
objA.say();


//隐性绑定丢失上下文 
var name_2 = 'name_2';
function say_2 () {
    console.log(this.name_2);
}
var objC = {
    name_2 : 'objC',
    say_2 : say_2
}
var alias = objC.say_2;
alias();
//浏览器下输出的是name_2 而不是要像隐性绑定的结果那样会输出objC
//因为在 alias = objC.say_2 = say_2 的传递中，函数传递并不是传递值
//而是引用传递，所以等同于alias = say_2 ，this仍旧为windo全局对象




//显示绑定 apply，call，bind
var name_3 = 'global name';
function speak() {
    console.log(this.name_3);
}
var objD = {
    name_3 : 'in objD'
}
var objE = {
    name_3 : 'in objE'
}

speak();//'global name'
speak.call(objD);//'in objD'
speak.apply(objE);//'in objE'
//call，apply用法相似，区别在于传递参数时apply以数组形式传递
//call 依次给出就好

function count(num1,num2) {
    console.log(this.a + num1 + num2);
}
var objF = {
    a : 3
}
var countA = count.bind(objF);
countA(1,2);

var countB = count.bind(objF, 4);
countB(7);



//new 绑定 es6
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log('name : ' + name + '\n age : ' + age);
    }
}
var simon = new Person('Simon', 20);
simon;

//另一个new绑定的例子
function Student (number, age) {
    this.number = number;
    this.age = age;
    console.log('Student :' + number + '\n age : ' + age + this);
}

Student(1001,20);
var jack = new Student(1002, 11);




