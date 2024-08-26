//문제 1
function printStar(max) {
    for(let i=0; i < max; i++) {
        let row ="";
        for(let j=0; j < i+1; j++) {
           row += "*";
        }
        console.log(row);
    }
}

printStar(5);
console.log("");

//문제2
function printreStar(max) {
    for(let i=0; i < max; i++) {
        let row ="";
        for(let j=0; j < max-i; j++) {
           row += "*";
        }
        console.log(row);
    }
}

printreStar(5);
console.log("");

function printStar2(max, current=1) {
    if( current > max) {
        return;
    } else {

    }
}

printStar2(5);
