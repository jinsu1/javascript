function sayHello(m) {
    console.log(`sayHello(" ${m} ")`);
}

sayHello("안녕하세요 자바스크립트!!");

const say = sayHello;

say(`Hello Javascipt`);