let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let N = parseInt(input);
let cnt = 0;
for(let i=1; i<=N; i++){
    if(i%5===0) cnt++
    if(i%25===0) cnt++
    if(i%125===0) cnt++
}
console.log(cnt)