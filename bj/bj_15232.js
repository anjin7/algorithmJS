let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [R, C] = input.map(n=>parseInt(n));
for(let i=0; i<R; i++){
    let answer = "";
    for(let j=0; j<C; j++){
        answer += "*"
    }
    console.log(answer)
}