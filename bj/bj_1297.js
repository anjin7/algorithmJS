// let input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(n=>Number(n));
let input = [52, 9, 16];
let [D, H, W] = input;
let A = (Math.sqrt(H*H+W*W));
let realH = Math.floor(D*H / A);
let realW = Math.floor(D*W / A);
console.log(`${realH} ${realW}`);