// let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let input = [2, 1, 2, 1, 2, 1];
const chess = [1, 1, 2, 2, 2, 8];
let answer = [];
for(let i=0; i<chess.length; i++){
    answer.push(chess[i]-input[i])
};
console.log(answer.join(' '));