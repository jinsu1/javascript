if(false) {
    var num1 = 100;
    console.log("블록안: " + num1);
}

console.log("블록밖: " + num1);


if(true) {
    var num2 = 100;
    console.log("블록안: " + num2);
}

console.log("블록밖: " + num2);

let num3 = 100;

if(true) {
    let num4 = num3 + 100;
    console.log("블록안: " + num4);
}

// console.log("블록밖: " + num4);

for(var i=0; i<10; i++) {
    console.log("반복문 안 ::: " + i);
}

console.log("반복문 밖 >>> " + i);

for(let j=0; j<10; j++) {
    console.log("반복문 안 ::: " + j);
}

// console.log("반복문 밖 >>> " + j);

y = 200;
var y;
console.log(y);