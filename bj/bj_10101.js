let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [A, B, C] = input.map(n=>parseInt(n));
if((A+B+C)!==180){
    console.log('Error')
}else if(A!==B && B!==C && C!==A){
    console.log('Scalene')
}else if(A===B && B===C && C===A){
    console.log('Equilateral')
}else{
    console.log('Isosceles')
}