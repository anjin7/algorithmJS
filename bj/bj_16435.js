// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [`9 1`,
`9 5 8 1 3 2 7 6 4`]
let [N, init] = input[0].split(' ').map(n => parseInt(n));
let arr = input[1].split(' ').sort((a,b)=>a-b);
for(let i=0; i<N; i++){
    if(arr[i]<=init){
        init++
    }else{
        break;
    }
}
console.log(init)