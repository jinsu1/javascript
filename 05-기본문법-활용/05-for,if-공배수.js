const x = 3;
const y = 5;

let sum = 0;

for(let i=1; i<=100; i++) {
    if(i % (x * y) == 0) {
        console.log(i);
        sum += i;
    }
}

console.log(`${x}와 ${y}의 공배수의 합: ${sum}`);