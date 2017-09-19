var sum_2 = function () {
    var i, sum = 0;
    for(i = 0; i < arguments.length; i += 1) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sum_2(4, 8, 15, 16, 23, 42));
//arguments并不是一个真正的数组，是一个类似数组的对象
//函数可以用arguements访问所有该函数被调用时传给它的参数列表