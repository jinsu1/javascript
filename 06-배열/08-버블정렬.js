const data = [3, 5, 1, 4, 2];
console.log(data);

for(let i=0; i < data.length -1; i++) {
    for(let j=0; j < data.length -1 -i; j++) {
        if(data[j] > data[j+1]) {
            let temp = data[j];
            data[j] = data[j+1];
            data[j+1] = temp;
        }
    }
}

console.log(data);