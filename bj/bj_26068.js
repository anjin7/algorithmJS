let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0]);
let cnt = 0;
for(let i=1; i<=N; i++){
    let [D, M , ...day] = input[i].split('');
    let num = parseInt(day.join(''));
    if(num<=90)cnt++
}
console.log(cnt)