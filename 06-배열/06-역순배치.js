const data = [1, 5, 2, 4, 3];
console.log(data);

let official = data.length % 2 == 0 ? data.length / 2 : (data.length-1) / 2;

for(let i=0; i < official; i++) {
    let target = data.length-1-i;

    let temp = data[i];
    data[i] = data[target];
    data[target] = temp;
}
console.log(data);