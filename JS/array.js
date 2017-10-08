console.log([...'hello']);

var array1 = [1,2,3];
var array2 = [7,8,9];
var array3 = ['A','P','Q'];

console.log([...array1,...array2,...array3]);

let arrayLike = {
    '0' : '1',
    '1' : '2',
    '2' : '3',
    length : 3//重要，类数组的对象
}
console.log(Array.from(arrayLike));
console.log(Array.from(arrayLike, (x) => x * x));

var t = [1, 2, 3].includes(2, -1);//负数，倒数开始，-1表示最后一个数，以此类推
console.log(t);

[,'a'].forEach((x,i) => console.log(x)); 

const o = {
    a :'!',
    method(){
        console.log('I am here ' + this.a);
    }
}
o.method();

