// for(let i=0; i<5; i++) {
//     console.log("i에 대한 반복 수행 시작 >> i=" + i);

//     for(let j=0; j<i+1; j++) {
//         console.log(`${i}, ${j}`);
//     }
// }

// for(let i=0; i<7; i++) {
//     let str = "";

//     for(let j=0; j<7-i; j++) {
//         str += "*";
//     }
//     console.log(str);
// }


// for(let i=0; i<7; i++) {
//     let str = "";

//     for(let j=0; j<7-i; j++) {
//         str += " ";
//     }
//     for(let z=0; z<i+1; z++) {
//         str += "*";
//     }
//     console.log(str);
// }


for(let i=0; i<7; i++) {
    let str="";
    for(let j=0; j<7-i; j++) {
        str += " ";
    }
    for(let j=0; j<i; j++) {
        str += "*";
    }
    for(let j=1; j<i; j++) {
        str += "*";
    }
    console.log(str);
}


