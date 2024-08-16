let selfPlus = 1;
console.log(selfPlus);

selfPlus++;
console.log(selfPlus);

++selfPlus;
console.log(selfPlus);


let selfMinus = 1;
console.log(selfMinus);

selfMinus--;
console.log(selfMinus);

--selfMinus;
console.log(selfMinus);

let prevValue = 1;

let prevResult = 100 + ++ prevValue;

console.log(prevResult); //102
console.log(prevValue);  //2

let nextValue = 1;

let nextResult = 100 + nextValue++;

console.log(nextResult); // 101
console.log(nextValue); // 2
