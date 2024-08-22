let a = 100;
let b = a;
console.log(`a= ${a}, b= ${b}`);

a++;
console.log(`a= ${a}, b=${b}`);

const user = {
    name: "Lee"
};

const member = user;
console.log(user);
console.log(member);

member.name = "Kim";
console.log(user);
console.log(member);

const d1 = [1, 2, 3];
const d2 = d1;
console.log(d1);
console.log(d2);

d1[0] += 10;
d1[1] += 10;
d2[2] += 10;
console.log(d1);
console.log(d2);