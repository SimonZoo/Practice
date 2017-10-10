 let proxy = new Proxy({}, {
     get: function (target, property) {
         return 35;
     }
 })

 let obj = Object.create(proxy);
 obj['name'] = 'z';
 console.log(`obj.name : ${obj.name},obj.time : ${obj.time}`);

 var person = {
     name: 'Mike'
 }

 var p = new Proxy(person,{
     get: function (target, property) {
         if (property in target) {
             console.log(`${property} is ${target[property]}`);
         } else {
             console.log('Error');
         }
     }
 });
 p.name;
 p.age;

 //部分拦截操作
 var proto = {};
 var p = new Proxy({}, {
     getPrototypeOf(target) {
         return proto;
     }
 });
 console.log(Object.getPrototypeOf(p) === proto);

 let target = {
     _bar: '_bar',
     _foo: '_foo',
     baz: 'baz'
 }

 let handler = {
     ownKeys(target) {
         return Reflect.ownKeys(target).filter(key => key[0] !== '_');
     }
 };

 let p1 = new Proxy(target, handler);
 for (let key of Object.keys(p1)) {
     console.log(target[key]);
 }