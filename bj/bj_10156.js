let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [K, N, M] = input.map(n=>parseInt(n));
let price = K*N;
if(price>M){
    console.log(price-M)
}else{
    console.log(0)
}