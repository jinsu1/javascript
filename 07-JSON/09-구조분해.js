const object = { a: 1, b: 2, c: 3 };

const {a, b, c} = object;

console.log(a);
console.log(b);
console.log(c);

const arr = [100, 200];

const[x, y] = arr;
console.log(x);
console.log(y);

const data = { name: "hello", age:20, height: 172, weight: 85};
const {name} = data;
console.log(name);

const {height: h, weight: w} = data;
console.log(h);
console.log(w);
console.log(data);

const dummy = { a1: 100, a2: 200, a3: 300, a4: 400};
const {a1, a2, ...rest_b} = dummy;
console.log(a1);

let origin = {name: 'javascript', age: 25};
origin = {...origin, gender: 'M'};
console.log(origin);

const newdata2 = {...origin, age: 30, gender: 'F'};
console.log(newdata2);