function something(x, y, cb) {
    const result = cb(x, y);
    cb(x, y);

}

// function plus(a,b) {
//     return a+b;
// }

// let minus = (a, b) => a-b;

// something(100, 50, plus);
// something(100, 50, minus);
// console.log(minus);

// something(200, 100, function(a, b) {
//     return a * b;
// });


something(5, 7, (a, b) => {
    for(let i=a; i<b; i++) {
      console.log(`7 x ${i} = ${i*7}`);
    }
    return 1;
});

something(5, 7, (a, b) => {
    return a + b;
});

something(5, 7, (a, b) => a + b );