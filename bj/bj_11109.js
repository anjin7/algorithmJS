let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [T, ...arr] = input;
for(let i=0; i<parseInt(T); i++){
    let [d,n,s,p]= arr[i].split(' ').map(n=>parseInt(n));
    if(d+(n*p)<(n*s)){
        console.log("parallelize")
    }else if(d+(n*p)>(n*s)){
        console.log("do not parallelize")
    }else{
        console.log("does not matter")
    }
}