let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [N, M] = input.map(n=>BigInt(n));
let money = (N/M).toString();
let rest = (N%M).toString();
console.log(money);
console.log(rest);