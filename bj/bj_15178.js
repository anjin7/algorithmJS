let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, ...arr] = input;
for(let i=0; i<parseInt(N); i++){
    let [A,B,C] = arr[i].split(' ').map(n=>parseInt(n));
    let sum = A+B+C;
    if(sum===180){
        console.log(`${A} ${B} ${C} Seems OK`);
    }else{
        console.log(`${A} ${B} ${C} Check`);
    }
}