let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [M, N] = input.map(n=>parseInt(n));
let bundle = Math.floor(M/N)
let cnt = M;
while(true){
    if(bundle<1)break
    if(bundle>=1){
        cnt += bundle
        bundle = Math.floor(bundle/N)
    } 
}
console.log(cnt)