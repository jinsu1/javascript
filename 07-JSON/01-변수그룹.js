const student = {
    studno: 10101,
    grade: 1,
    name: "학생",
    phoneno: "010-1231-2342"
};

console.group("출력 type1");
console.log("학번: " + student.studno);
console.log("학년: " + student.grade);
console.log("이름: " + student.name);
console.log("연락처: " + student.phoneno);
console.groupEnd();

console.group("출력 type2");
console.log("학번: " + student['studno']);
console.log("학년: " + student['grade']);
console.log("이름: " + student['name']);
console.log("연락처: " + student['phoneno']);
console.groupEnd();

const keyName = "phoneno";
console.log(student[keyName]);

const keys = Object.getOwnPropertyNames(student);
console.log(keys);

for(const k of keys) {
    console.group(k);
    console.log(student[k]);
    console.groupEnd();
}

for(const k in student) {
    console.group(k);
    console.log(student[k]);
    console.groupEnd();
}