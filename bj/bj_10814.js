// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [3, `21 Junkyu`, `21 Dohyun`, `20 Sunyoung`];
let [N, ...arr] = input;
arr.sort((a, b) => a.split(' ')[0] - b.split(' ')[0]);
console.log(arr.join('\n'))