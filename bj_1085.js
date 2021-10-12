// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let input = [6, 2, 10, 3];

const x = Number(input[0]);
const y = Number(input[1]);
const w = Number(input[2]);
const h = Number(input[3]);

const minW = Math.min(x, w-x);
const minH = Math.min(y, h-y);
console.log(Math.min(minW, minH));