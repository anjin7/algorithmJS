// let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let input = 5;
let N = parseInt(input);
let answer = [];
for(let i=1; i<(2*N); i++){
    let star = "*";
    let blank = "";
    if(i<N){
        for(let j=N; j>i; j--){
            star = "*"+star+"*"
        }
        for(let j=1; j<i; j++){
            blank += " "
        }
    }else if(i>=N){
        for(let j=2*N-1; j>i; j--){
            blank += " "
        }
        for(let j=N; j<i; j++){
            star = "*"+star+"*"
        }
    }    
    answer.push(blank + star)
}
console.log(answer.join('\n'))