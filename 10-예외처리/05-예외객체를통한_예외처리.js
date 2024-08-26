function foo (id, pw) {
    if(!id) {
        throw new Error("아이디를 입력하세요.");
    }

    if(!pw) {
        throw new Error("비밀번호를 입력하세요.");
    }

    return "로그인 되셨습니다.";
}

let a = null;
let b = null;

try {
    a = foo("", "1234");
} catch (err) {
    console.log(`에러이름: ${err.name}`);
    console.log(`에러내용: ${err.message}`);
}

try {
    b = foo("hello", "");
} catch(err) {
    console.log(`에러이름: ${err.name}`);
    console.log(`에러내용: ${err.message}`);
}

console.log(a);
console.log(b);