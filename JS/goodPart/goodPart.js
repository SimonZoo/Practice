var number = 192.49494;
console.log(number);

number = Math.floor(number);
console.log(number);

console.log(isNaN(number));
console.log("A"==="\u0041");

var string = 'Simon';
console.log(string);

string = 'invzhi';
console.log(string);

for (var index = 0; index < 5; index++) {
    var q = 100;
    console.log(index);
}
console.log(index + ' ! ' + q);

var array = [1,3,4];
console.log(typeof(array));
console.log(typeof(null));

var object_A = {
    name : 'Simon',
    age : 20,
    color: 'white'
}
for (var key in object_A) {
    if (object_A.hasOwnProperty(key)) {
        var element = object_A[key];
        console.log(key + ':' + element);
    }
}

var object_B = Object.create(object_A);
object_B['sex'] = 'F';
object_B['aaa'] = '???';

for (var key in object_B) {
    if (object_B.hasOwnProperty(key)) {
        var element = object_B[key];
        console.log(key + ':' + element);
    }
}
if (object_B.hasOwnProperty('aaa')) {
    console.log('?');
}
