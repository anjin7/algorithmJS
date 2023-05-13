let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(n=>parseInt(n));
let answer = [];
for(let i=1; i<=N; i++){
    let arr = input[i].split('');
    let reArr = arr.reverse().join('');
    answer.push(reArr)
}
console.log(answer.join('\n'))

// 왜 안되지...