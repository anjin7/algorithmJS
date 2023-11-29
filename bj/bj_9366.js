let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0]);
for(let i=1; i<=N; i++){
    let [A, B, C] = input[i].split(' ').map(n=>parseInt(n)).sort((a,b)=>b-a);
    if(A>=(B+C)){
        console.log(`Case #${i}: invalid!`)
    }else if(A===B || B===C || C===A){
        if(A===B && B===C && C===A){
            console.log(`Case #${i}: equilateral`)
        }else{
            console.log(`Case #${i}: isosceles`)
        }        
    }else{
        console.log(`Case #${i}: scalene`)
    }
}