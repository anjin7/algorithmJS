// let input = require('fs').readFileSync('/dev/stdin').toString();
let input = 5;
let N = parseInt(input);
for(let i=0; i<N; i++){
    let answer = ""
    for(let j=0; j<i; j++){
        answer += " "
    }
    for(let j=N-i; j>0; j--){
        answer += "*"
    }
    console.log(answer)
}