function returnBreak(x, y) {
    if (x < 10) {
        return -1;
    }

    if (y < 10) {
        return -2;
    }

    return x+y;
}

console.log(returnBreak(1,100));
console.log(returnBreak(100,1));
console.log(returnBreak(20,100));