function foo(x,y) {
    console.log(`x= ${x}, y= ${y}`);

    let result = 0;
    if (x != undefined) {result += x;}
    if (y != undefined) {result += y;}

    console.log(`result ${result}`);

}

foo(100,200);
foo(500);
foo();