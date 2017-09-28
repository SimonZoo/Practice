var fun = function (string) {
    console.log(string);
}
Function.prototype.method = function (name, func) {
    Function.prototype[name] = func;
    return this;
};

Function.method('greet', function (name) {
    console.log('Hello,' + name);
});
fun.greet('Simon');

