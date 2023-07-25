let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, W, H] = input[0].split(' ').map(n=>parseInt(n));
let max = Math.floor(Math.sqrt(W*W+H*H));
for(let i=1; i<=N; i++){
    let match = parseInt(input[i]);
    if(match>max){
        console.log("NO")
    }else{
        console.log("YES")
    }
}