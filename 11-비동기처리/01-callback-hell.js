function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

setTimeout( () => {
    console.log("당신의 추첨 결과는..?");

    const lucky = random(1, 9);

    setTimeout(()=> {
    console.log(lucky % 2 == 0 ? "당첨입니다~!!" : "꽝!!!");
}, 3000);
}, 1000);

console.log("추첨 중...");
