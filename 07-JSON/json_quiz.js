// 1번문제
const result = {
    "A" :0,
    "B" :0,
    "AB" : 0,
    "O" : 0
};

let data = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O'];

for(let i=0; i< data.length; i++) {
    if(data[i] == 'A') {
        result.A++;
    } else if(data[i] == 'B') {
        result.B++;
    } else if(data[i] == 'O') {
        result.O++;
    } else {
        result.AB++;
    }
}

console.log(result);

//2번 문제
const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
};


//2-1
const student = Object.keys(exam);

for(let i=0; i<student.length; i++) {
    let sum = 0;
    for(let j=0; j < exam[student[i]].length; j++) {
        sum += exam[student[i]][j];
    }
    console.log(`${student[i]}의 총점은 ${sum}이고 평균은 ${sum/exam[student[i]].length}점 입니다.`);
}

//2-2
let mathSum = 0;
for(let i=0; i<student.length; i++) {
    mathSum += exam[student[i]][2];
}
console.log(`모든 학생의 수학 총점은 ${mathSum}이고 평균은 ${mathSum/student.length}점 입니다.`);


//3번 문제
const covid19 = [
    {date: '0125', active: 426},
    {date: '0126', active: 343},
    {date: '0127', active: 547},
    {date: '0128', active: 490},
    {date: '0129', active: 460},
    {date: '0130', active: 443},
    {date: '0131', active: 338},
    {date: '0201', active: 299}
];

//3-1
let activeSum = 0;
for(let i=0; i<covid19.length; i++) {
    activeSum += covid19[i].active;
}
console.log(`누적 확진자 수: ${activeSum}\n평균 확진자 수: ${activeSum/covid19.length}`);

//3-2
let maxActive = covid19[0];
for(let i=0; i<covid19.length; i++) {
    if( maxActive.active < covid19[i].active ) {
        maxActive = covid19[i];
    }
}
console.log(`확진자가 가장 많이 나타난 날: ${maxActive.date}`);
