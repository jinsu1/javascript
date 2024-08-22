let centerPoint = {
    x: 5,
    y: 10
};

let circle = {
    center: centerPoint,
    radius: 5.1
};

console.log(`원의 중점: (${circle.center.x}, ${circle.center.y})`);
console.log(`원의 반지름: ${circle.radius}`);


let circle2 = {
    center: {
        x: 5,
        y: 10,
    },
    radius: 5.1
};

console.log(`원의 중점: (${circle2.center.x}, ${circle2.center.y})`);
console.log(`원의 반지름: ${circle2.radius}`);