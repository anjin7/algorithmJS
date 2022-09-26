// let input = require('fs').readFileSync('/dev/stdin').toString().split('');
// let input = "baekjoon";
let cnt = 0;
for(let i=0; i<input.length; i++){
    if(input[i]==="a" || input[i]==="e" || input[i]==="i" || input[i]==="o" || input[i]==="u"){
        cnt++
    }
}
console.log(cnt)