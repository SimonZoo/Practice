let item = new Set([1,2,4,5,6,6,7,7]);
console.log('size:' + item.size);
//可以用set来去除重复的数组成员


for (let i of item) {
    console.log('values:' + i);
}
//默认的遍历是value

item = new Set([...item].map(x => x*x));

for (let i of item.keys()) {
    console.log(i);
}

//利用set实现并交差集

const setA = new Set([2,3,4]);
const setB = new Set([4,7,8]);
const a = new Set([...setA, ...setB]);//a [2,3,4,7,8]
const b = new Set([...setA].filter(x => setB.has(x)));// b [4]


