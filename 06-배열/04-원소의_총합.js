const data = [10, 20, 30, 40, 50];

let sum = 0;

for(let i = 0; i<data.length; i++) {
    sum += data[i];
}

console.log(`data의 총합: ${sum}`);

const avg = sum / data.length;
console.log(`data의 평균: ${avg}`);