
let {foo2 : {bar2} } = { foo2 : { bar2 :'baz2'} };
console.log(bar2)

var text = String.fromCodePoint(0x20BB7);
for (let i of text) {
    console.log(i);
}

console.log`123`;

function tag (string) {
    console.log(string.raw[0]);
}

tag`qqq`;

console.log(String.raw({ raw : 'Simon'}, 0, 1, 2));

