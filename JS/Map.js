const map = new Map();
map.set(1,'aaa');
map.set('qq','ppp');
console.log(map.get('qq'));

for (let [key,value] of map) {
    console.log(key, value);
}
//Map的默认遍历是entries

function mapToObj(map) {
    let obj = Object.create(null);
    for (let [key,value] of map) {
        obj[key] = value;
    }
    return obj;
}

console.log(mapToObj(map));