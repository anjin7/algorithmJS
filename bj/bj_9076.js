// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [4,
`10 8 5 7 9`,
`10 9 10 9 5`,
`10 3 5 9 10`,
`1 2 3 6 9`]
let N = parseInt(input[0]);
for(let i=1; i<=N; i++){
    let arr = input[i].split(' ').map(n=>parseInt(n));
    arr.sort((a,b)=>a-b);
    arr.shift();
    arr.pop();
    if((arr[2]-arr[0])>=4){
        console.log("KIN")
    }else{
        console.log(arr[0]+arr[1]+arr[2])
    }
}