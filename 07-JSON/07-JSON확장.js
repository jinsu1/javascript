const foo = {
    name: "자바스크립트",
    age: 19
};

foo.email = "hello@world.com";
console.log(foo);

const myJson = {}
console.log(myJson);

for (let i=0; i<10; i++) {
    const key = "value" + i;
    myJson[key] = i + 100;
};

console.log(myJson);