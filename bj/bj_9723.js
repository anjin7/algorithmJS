let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, ...arr] = input;
for(let i=0; i<parseInt(N); i++){
    let [A,B,C] = arr[i].split(' ').map(n=>parseInt(n)).sort((a,b)=>a-b);
    let answer = "";
    if((C*C)===(A*A+B*B)){
        answer = "YES"
    }else{
        answer = "NO"
    }
    console.log(`Case #${i+1}: ${answer}`)
}