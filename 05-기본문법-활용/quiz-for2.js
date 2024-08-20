/* 1번 문제 */
// for (let i = 9; i > -1; i--) {
//     let odd = i % 2 !== 0;
//     if(odd) {
//         odd = i;
//         console.log(odd);
//     }
// }

/* 2번 문제 */

// let i = 9;
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
// for(let i=1; i<7; i++) {
//     for(let j=1; j<7; j++) {
//         if(i+j == 6) {
//             console.log(`[ ${i}, ${j} ]`);
//             count++;
//         }
//     }
// }

// console.log(`경우의 수는 ${count}개 입니다.`);

/* 5번 문제 */
// for(let i=0; i<4; i++) {
//     let str = "";
//     for(let j=i; j < i+4; j++) {
//         str += j;
//     }
//     console.log(str);
// }

/* 6번 문제 */

// for(let i=0; i<8; i++) {
//     let str="";
//     for(let j=1; j < i+1; j++) {
//         str += j;
//     }
//     console.log(str);
// }


/* 7번 문제 */
let number = 2;

if( number == 1 || number == 2) {
    for(let i=4-number; i<10; i+=2) {
        console.log(`${i}단)`);
        for(let j=0; j<10; j++) {
            console.log(`${i} x ${j} = ${i*j}`);
        }
        console.log("");
    }
} else {
    console.log("number에는 1 또는 2밖에 저장될 수 없습니다. 프로그램을 종료합니다.");
}

// let number = 1;
// if(number == 1 || number == 2) {
//     for(let i=2; i<10; i++) {
//         if(number == 1) {
//             if(i % 2 == 0) {
//                 console.log(`${i}단)`);
//                 for(let j=1; j<10; j++){
//                     console.log(`${i} x ${j} = ${i*j}`);
//                 }
//                 console.log("");
//             }
//         } else {
//             if (!(i % 2 == 0)) {
//               console.log(`${i}단)`);
//               for(let z=1; z<10; z++) {
//                 console.log(`${i} x ${z} = ${i*z}`);     
//                 }
//             console.log("");
//             }
//         }
//     }
// } else {
//     console.log("number에는 1 또는 2밖에 저장될 수 없습니다. 프로그램을 종료합니다.");
// }


// let number = 1;
// if(number == 1 || number == 2) {
//     if(number == 1) {
//         for(let i=2; i<10; i+=2) {         
//             console.log(`${i}단)`);
//             for(let j=0; j<10; j++){
//                 console.log(`${i} x ${j} = ${i*j}`);
//             }
//         console.log("");
//         }
//     } else {
//         for(let i=1; i<10; i+=2) {         
//             console.log(`${i}단)`);
//             for(let j=0; j<10; j++){
//                 console.log(`${i} x ${j} = ${i*j}`);
//             }
//         console.log("");
//         }
//     }
// } else {
//     console.log("number에는 1 또는 2밖에 저장될 수 없습니다. 프로그램을 종료합니다.");
// }