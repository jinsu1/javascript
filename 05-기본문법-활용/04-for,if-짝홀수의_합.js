let a = 0;
let b = 0;

for(let i=1; i<=10; i++) {
    if(i % 2 == 0) {
        console.log(`${i}는 짝수`);
        a += i;
    } else {
        console.log(`${i}는 홀수`);
        b += i;
    }
}

console.log(`1~10 까지 짝수들의 합: ${a}`);
console.log(`1~10 까지 홀수들의 합: ${b}`);