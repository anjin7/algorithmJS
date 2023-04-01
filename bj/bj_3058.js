let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let T = parseInt(input[0]);
for(let i=1; i<=T; i++){
    let evenArr = [];
    let arr = input[i].split(' ').map(n=>parseInt(n));
    for(let j=0; j<arr.length; j++){
        if(arr[j]%2===0){
            evenArr.push(arr[j])
        }
    }
    evenArr.sort((a,b)=>a-b);
    let sum = evenArr.reduce((acc,current)=>acc+current,0);
    console.log(`${sum} ${evenArr[0]}`)
}