function foo(x, y) {
    if (x < 0 && y < 0) {
        return 0;
    }
    return x + y;
}

console.log(foo(10, 20));
console.log(foo(-1, -2));

const k = foo(-1,-2);

if ( k == 0) {
    console.log("x와 y가 0보다 작습니다.");
} else {
    console.log(k);
}