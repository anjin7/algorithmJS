// const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(val=>+val);

let input =[5, 8, 4];

const [A, B, C] = input;

console.log( (A+B)%C );
console.log( ((A%C) + (B%C))%C );
console.log( (A*B)%C );
console.log( ((A%C) * (B%C))%C );