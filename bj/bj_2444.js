let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let N = parseInt(input);
for(let i=0; i<(2*N-1); i++){
    let row = "*";
    let star = ""
    let blank = "";
    if(i<N){
        for(let j=0; j<i; j++){
            star += "*"
        }
        for(let j=N-1; j>i; j--){
            blank += " "
        };
    }else{
        for(let j=N-1; j<i; j++){
            blank += " "
        }
        for(let j=(2*N-2); j>i; j--){
            star += "*"
        };
    }
    row = blank + star + row + star
    console.log(row)
}