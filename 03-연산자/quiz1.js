
console.group("1) 나이 구하기");
const year = 2024;
let age = year - (1996 - 1);

console.log("나는 %s세 입니다.", age);
console.groupEnd();

console.group("2) 태어난 년도 구하기");
const myAge = 29;
let nowYear = 2024;

const birth = nowYear - (myAge - 1);
console.log("나는 %s년도에 태어났습니다.", birth);
console.groupEnd();

console.group("3) 바구니의 수 구하기");
let numOfApples = 123;
let limit = 10;

const basket = Math.trunc(numOfApples / limit) + (numOfApples % limit > 0 ? 1 : 0 );
console.log(basket);
console.groupEnd();