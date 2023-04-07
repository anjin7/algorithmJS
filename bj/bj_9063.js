let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0]);
let xArr = [];
let yArr = [];
for(let i=1; i<=N; i++){
    let [x, y] = input[i].split(' ').map(n=>parseInt(n));
    xArr.push(x);
    yArr.push(y);
};
let maxX = Math.max(...xArr);
let minX = Math.min(...xArr);
let maxY = Math.max(...yArr);
let minY = Math.min(...yArr);
let square = (maxX-minX) * (maxY-minY);
console.log(square)