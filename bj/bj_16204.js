let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [N, M, K] = input.map(n=>parseInt(n));
if(M>=K){
    console.log(N-(M-K))
}else{
    console.log(N-(K-M))
}