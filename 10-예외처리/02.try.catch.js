const data = [1, 2, 3];

console.log("배열 탐색 시작");

try {
    for(let i=0; i<10; i++) {
        console.log(data[i].toFixed(2));
    }

    console.log("try 블록 실행 완료");
} catch (err) {
    console.log(`${err.name} 에러발생`);
    console.log(err.message);
} finally {
    console.log("배열 탐색이 종료되었습니다.");
}

console.log("프로그램 종료");