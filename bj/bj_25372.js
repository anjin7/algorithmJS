let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0]);
for(let i=1; i<=N; i++){
    if(input[i].length>=6 && input[i].length<=9){
        console.log("yes")
    }else{
        console.log("no")
    }
}