const grade = [ ["철수", 92, 81, 76], ["영희", 72, 95, 84], ["민혁", 80, 86, 98]];

let sum = 0;
for(let i=0; i < grade.length; i++) {
    let personalSum = 0;
    for(let j=1; j < grade[i].length; j++) {
        sum += grade[i][j];
        personalSum += grade[i][j];
    }
    console.log(`${grade[i][0]}의 총점은 ${personalSum}이고 평균은 ${personalSum / (grade[i].length - 1)} 입니다.`)
}
console.log(`모든 학생의 총점은 ${sum}입니다.`);