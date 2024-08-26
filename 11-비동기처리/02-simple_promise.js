function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}


function getLuckyResult() {
    return new Promise(function (resolve, reject) {
    
        setTimeout( () => {
            console.log("당신의 추첨 결과는..?");
            const lucky = random(1, 9);
        
            if (lucky % 2 == 0) {

                resolve(
                    {
                    msg: "당첨입니다!!",
                     a: 1,
                     b: 2,
                     c: 3
                    }
                );
            } else {
                reject(
                    {
                        msg: "꽝!!", 
                        d:-1, 
                        e:-2
                    }
                );
            }
        }, 1000);
    });
    
}

const mypromise = getLuckyResult();

mypromise.then(({msg, a, b, c}) => {
    console.log(`${msg}, a=${a}, b=${b}, c=${c} `);
}).catch(({msg, d, e}) => {
    console.error(`${msg}, d=${d}, e=${e}`);
}).finally(() => {
    console.log("fin :)");
})
