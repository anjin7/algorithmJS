let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0]);
for(let i=1; i<=N; i++){
    let [r, e, c] = input[i].split(' ').map(n=>parseInt(n));
    if(r<(e-c)){
        console.log("advertise")
    }else if(r===(e-c)){
        console.log("does not matter")
    }else{
        console.log("do not advertise")
    }
}