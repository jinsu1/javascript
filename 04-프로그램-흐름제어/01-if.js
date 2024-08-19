const haveMoney = true;

if (haveMoney) {
    console.log("식당에서");
}

console.log("밥을먹자");

const money1 = 10000;

if (money1) {
    console.log("택시타고");
}

console.log("집에가자");

const money2 = 12000;

if(money2 >= 5000) {
    k = money2 - 7000;
    console.log(`선물을 사고 ${k}만큼 남았다.`);
}

const x1 = true;
const y1 = true;

if (x1 && y1) {
    console.log("x1 && y1 조건은 참 입니다.");
}

const x2 = true;
const y2 = false;

if (x2 && y2) {
    console.log("x2 && y2 조건은 참 입니다.");
}

const x3= true;
const y3= true;

if (x3 || y3) {
    console.log("x3 || y3 조건은 참 입니다.");
}


const x4 = true;
const y4 = false;

if(x4 || y4) {
    console.log("x4 || y3 조건은 참 입니다.");
}

const a = true;

if(!a) {
    console.log("Hello world");
}

const b = false;

if(!b) {
    console.log("헬로월드");
}


const x5 = true;
const y5 = false;

if ( !(x5 && y5) ) {
    console.log("!(x5 && y5)조건은 참 입니다.");
}

const x6 = true;
const y6 = false;

if ( !(x6 || y6) ) {
    console.log("!(x6 || y6) 조건은 참 입니다.");
}
