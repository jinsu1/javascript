//1번 문제
const 수학 = "B";

if(수학 == "A" || 수학 == "B" || 수학 == "C") {
    console.log("이 과목을 Pass 했습니다.");
} else {
    console.log("이 과목을 Pass하지 못했습니다.");
}

//2번 문제
let num = 1;
while(num < 11) {
    let answer = 2**num;
    console.log(`이진수 ${num}개는 ${answer}개의 정보를 표시가능`);
    num++;
}

// 3번 문제
let bit = 1;
for(let i=1; i < 11; i++) {
    bit *= 2;
    console.log(`이진수 ${i}개는 ${bit}개의 정보를 표시가능`);
}