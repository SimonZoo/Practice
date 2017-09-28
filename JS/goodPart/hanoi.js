function hanoi(n, from, to, help) {
    if(n === 1) {
        console.log(from + '>>>' + to);
        return;
    }
    hanoi(n - 1, from, help, to);//把n-1从from 挪到 help上 借助to
    move(from, to);
    hanoi(n - 1, help, to, from);// 把n-1从help挪到to上 借助from
}

function move(from, to) {
    console.log( from + '>>>' + to);
}


hanoi(3,'A', 'C','B');