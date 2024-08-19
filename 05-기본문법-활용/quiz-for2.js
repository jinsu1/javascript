/* 1번 문제 */
// for (let i = 10; i > -1; i--) {
//     let odd = i % 2 !== 0;
//     if(odd) {
//         odd = i;
//         console.log(odd);
//     }s
// }

/* 2번 문제 */

// let i = 10;
// while(i > -1) {
//     let odd = i % 2 !== 0;
//     if(odd) {
//         odd = i;
//         console.log(odd);
//     }
//     i--;
// }

/* 3번 문제 */
// let sum = 0;
// for(let i = 1; i < 20; i++) {
//     if(i % 2 == 0 || i % 3 == 0) {
//         sum += i;
//     }
// }

// console.log(sum);

/* 4번 문제 */
// let count = 0;
// for(i=1; i<7; i++) {
//     for(j=1; j<7; j++) {
//         if(i+j == 6) {
//             console.log(`[ ${i}, ${j} ]`);
//             count++;
//         }
//     }
// }

// console.log(`경우의 수는 ${count}개 입니다.`);

/* 5번 문제 */
for( i=0; i<4; i++) {
    let str = "";
    for(j=i; j < i+4; j++) {
        // process.stdout.write(`${j} `);
        str += j;
    }
    console.log(str);
}

/* 6번 문제 */
