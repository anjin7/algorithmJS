// let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let input = 18;
let N = parseInt(input);
let five = Math.floor(N/5);
let answer = [];
for(let i=five; i>=0; i--){
    let rest = N-(i*5);
    let cnt = 0;
    if(rest%3===0){
        cnt = i+(rest/3);
        answer.push(cnt)
    }
}
answer.sort((a,b)=>a-b)
if(answer.length===0){
    console.log(-1)
}else{
    console.log(answer[0])
}