// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`1 4 3 2 9 7 18 22 0`,
`2 4 8 10 0`,
`7 5 11 13 1 3 0`,
`-1`]
for(let i=0; i<input.length; i++){
    if(input[i]==="-1")break;
    let arr = input[i].split(' ').map(n=>parseInt(n));
    arr.sort((a,b)=>a-b);
    console.log(arr)
    let cnt = 0;
    for(let j=1; j<arr.length; j++){
        if(arr.includes(arr[j]*2))cnt++
    }
    console.log(cnt)
}