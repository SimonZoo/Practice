var add = function (a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        throw {
            name : 'TypeError',
            message : 'add needs number.'
        };
    }
    return a + b;
}

var try_it = function () {
    try {
        add(11,'seven');
    } catch (e) {
        console.log(e.name + ':' + e.message + '\nI know you made a mistake..');
    }
}

try_it();