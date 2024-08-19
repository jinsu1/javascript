const 국어 = "B";

switch (국어) {
    case 'A':
        console.log("A학점 입니다.");
        break;
    case 'B':
        console.log("B학점 입니다.");
        break;
    case 'C':
        console.log("C학점 입니다.");
        break;
    default:
        console.log("C학점 미만 입니다.");
        break;
}  

const 영어 = "B";

switch (영어) {
    case 'A':
        console.log("A학점 입니다.");
    case 'B':
        console.log("B학점 입니다.");
    case 'C':
        console.log("C학점 입니다.");
    default:
        console.log("C학점 미만 입니다.");
}

const 수학 = "B";

switch (수학) {
    case 'A':
    case 'B':
    case 'C':
        console.log("이 과목을 Pass 했습니다.");
        break;
    default:
        console.log("이 과목을 Pass하지 못했습니다.");
        break;
}

const 과학 = 72;

switch (과학 > 70 ) {
    case true:
        console.log("이 과목을 Pass했습니다.");
        break;
    default:
        console.log("이 과목을 Pass하지 못했습니다.");
        break;
        
}