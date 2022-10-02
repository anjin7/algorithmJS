    // let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`5 3 4`,
3,
4,
5,
6,
7]
let [N, W, H] = input[0].split(' ').map(n=>parseInt(n));
let D = Math.floor(Math.sqrt(W*W+H*H));

for(let i=1; i<=N; i++){
    let match = parseInt(input[i]);
    console.log(match)
    if(match<=W || match<=H || match<=D){
        console.log("DA")
    }else{
        console.log("NE")
    }
}