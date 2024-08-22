//let e = (x) => {} 
//let e = function (x) {}

const foo = (x) => {
    for(let i=0; i<x; i++) {
        console.log("hello world");
    }
};

foo(7);

const bar = x => {
    for(let i=0; i<x; i++) {
        console.log("hello");
    }
};

bar(3);

const hello = (x, y) => x+y;
console.log(hello(100,200));