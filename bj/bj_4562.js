let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, ...arr] = input;
for(let i=0; i<arr.length; i++){
    let [X, Y] = arr[i].split(' ').map(n=>parseInt(n));
    if(X>=Y){
        console.log("MMM BRAINS")
    }else{
        console.log("NO BRAINS")
    }
}