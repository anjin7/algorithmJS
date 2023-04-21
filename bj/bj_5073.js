// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`7 7 7`,
`6 5 4`,
`3 2 5`,
`6 2 6`,
`0 0 0`]
for(let i=0; i<input.length; i++){
    let lengthArr = input[i].split(' ').map(n=>parseInt(n));
    lengthArr.sort((a,b)=>a-b);
    let [A, B, C] = lengthArr;
    console.log(A,B,C)
    if(A===0 && B===0 && C===0) break;
    if(C>=(A+B)){
        console.log(`Invalid`)
    }else if(A===B && B===C && C===A){
        console.log(`Equilateral`)
    }else if(A===B || B===C || C===A){
        console.log(`Isosceles`)
    }else if(A!==B && B!==C && C!==A){
        console.log(`Scalene`)
    }
}