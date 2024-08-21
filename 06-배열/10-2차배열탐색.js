const myArr= [[1,2,3], [4,5,6]];

for (let i=0; i < myArr.length; i++) {
    console.log( i + "번째 행 ----------");
    console.log(myArr[i]);

    for(let j=0; j < myArr[i].length; j++) {
        console.log(myArr[i][j]);
    }
}

console.log("2차배열의 탐색");

const myArr2 = [[1,2,3], [4,5,6]];

for (const item of myArr2) {
    console.log(item);
    for (const sub of item){
        console.log(sub);
    }
}

console.log(myArr2);