// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = ['10 4200', 1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000];

const strToNumArr = (str) =>
  str.split(' ').map((n) => Number(n));

const [N, K] = strToNumArr(input.shift());
const values = input.map((v) => Number(v));
let k = K,
    v,
    q,
    result = 0;
for (let i = N - 1; i >= 0; i--) {
      v = values[i];
      q = Math.floor(k / v);
      if (q === 0) {
        continue;
      }
      result += q;
      k %= v;
      if (k === 0) {
        break;
      }
}
console.log(result);