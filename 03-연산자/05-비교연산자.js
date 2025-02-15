let x = 100;
let y = 50;

let compare1 = x >= y; //true
let compare2 = x > y; // true
let compare3 = x <= y; //false
let compare4 = x < y; //false

console.group("1) 이상, 이하, 미만 초과");
console.log(compare1); //true
console.log(compare2);
console.log(compare3);
console.log(compare4);
console.groupEnd();

let a1 = "1";
let a2 = 1;
let a3 = 1.0;
let a4 = true;

console.group("2) 같다");
console.group("내용만 비교하는 경우");
console.log(a1 == a2); //true
console.log(a1 == a3); //true
console.log(a1 == a4); // true

console.log(a2 == a3); // true
console.log(a2 == a4); // true

console.log(a3 == a4); //true
console.groupEnd();

console.group("데이터 타입까지 비교하는 경우");
console.log(a1 === a2); //false
console.log(a1 === a3); //false
console.log(a1 === a4); //false

console.log(a2 === a3); //true
console.log(a2 === a4); //false

console.log(a3 === a4); //false
console.groupEnd();
console.groupEnd();

let b1 = "1";
let b2 = 1;
let b3 = 1.0;
let b4 = true;

console.group("3) 다르다");
console.group("내용만 비교하는 경우");
console.log(b1 != b2); //false
console.log(b1 != b3); //false
console.log(b1 != b4); //false

console.log(b2 != b3); //false
console.log(b2 != b4); //false

console.log(b3 != b4); //false
console.groupEnd();

console.group("데이터 타입까지 비교하는 경우");
console.log(b1 !== b2); //true
console.log(b1 !== b3); //ture
console.log(b1 !== b4); //true

console.log(b2 !== b3); //false
console.log(b2 !== b4); //true

console.log(b3 !== b4); //true
console.groupEnd();
console.groupEnd();