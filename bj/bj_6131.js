// let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let input = 15;
let N = parseInt(input);
let A = Math.ceil(Math.sqrt(N));
let answer = [];
for(let i=1; i<=A; i++){
    if(Math.sqrt(N+(i*i))%1===0){
        answer.push(i);
    }
    A += 1
    if(A>500)break;
}
console.log(answer.length)