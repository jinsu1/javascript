let err = new Error("이상한 일이 벌어졌습니다.");
console.log(`에러이름: ${err.name}`);
console.log(`에러내용: ${err.message}`);

throw err;

console.log("프로그램 종료");