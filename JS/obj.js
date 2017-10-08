const tar = {name : 'Simon'};
const src1 = {age : 20};
const src2 = {class : 101};
Object.assign(tar, src1, src2);

console.log(tar);

const obj1 = {
    a : { b : 1 }
}
const obj2 = Object.assign({}, obj1);//浅拷贝
obj2.a.b = 99;
console.log(obj1.a.b);

const DEFAULTS = {
    logLevel: 0,
    outputFormat: 'html'
};
  
function processContent(options) {
    options = Object.assign({}, DEFAULTS, options);//默认值DEFAULTS
    console.log(options);
// ...
}

processContent({logLevel : 1});


let {keys, values, entries} = Object;
let student = {
    name : 'zoo',
    age : '18',
    class : 101
}  

for (let key of keys(student)) {
    console.log(key);
}

for (let value of values(student)) { //value 不含继承，可遍历
    console.log(value);
}

for (let [key, value] of entries(student)) {
    console.log([key, value]);
}

// let nullTest = student?.name || undefined;
// console.log(nullTest);  还不支持
