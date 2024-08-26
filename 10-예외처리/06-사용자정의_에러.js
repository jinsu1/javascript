class EmptyIdError extends Error {
    constructor(msg) {
        super(msg);
        super.name = 'EmptyIdError';
    }
}

class EmptyPwError extends Error {
    constructor(msg) {
        super(msg);
        super.name = 'EmptyPwError';
    }
}

function foo (id, pw) {
    if(!id) {
        throw new EmptyIdError("아이디를 입력하세요.");
    }

    if(!pw) {
        throw new EmptyPwError("비밀번호를 입력하세요");
    }

    return "로그인 되었습니다.";
}

const a = null;
const b = null;

try {
    a =  foo("", "1234");
} catch (err) {
    console.log(`에러이름: ${err.name}`);
    console.log(`에러내용: ${err.message}`);
}

try {
    b = foo("hello", "");
} catch (err) {
    console.log(`에러이름: ${err.name}`);
    console.log(`에러내용: ${err.message}`);
}

console.log(a);
console.log(b);