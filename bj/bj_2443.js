let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let N = parseInt(input);
let answer = [];
for(let i=0; i<N; i++){
    let star = "*";
    let blank = "";
    for(let j=N-1; j>i; j--){
        star = "*"+star+"*" 
    }
    for(let j=0; j<i; j++){
        blank += " "
    }
    answer.push(blank + star)
}
console.log(answer.join('\n'))