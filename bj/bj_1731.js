// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(n=>parseInt(n));
let input=[3,
250000,
500000,
1000000];
let [N, ...arr] = input.map(n=>parseInt(n));

for(let i=0; i<N; i++){
    if((arr[i+1]-arr[i])===(arr[i+2]-arr[i+1])){
        let commonAdd = arr[i+1]-arr[i];
        console.log(arr[N-1]+commonAdd);
        break;
    }else{
        let common = arr[i+1]/arr[i];
        console.log(arr[N-1]*common);
        break;
    }
}