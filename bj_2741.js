// let input = require('fs').readFileSync('/dev/stdin').toString();

let input = [5];

const N = Number(input);

let result = ''
for (let i=1; i<=N; i++){
    result += i + '\n'
};
console.log(result)