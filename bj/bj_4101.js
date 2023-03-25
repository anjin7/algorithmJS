let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
for(let i=0; i<input.length; i++){
    let [A, B] = input[i].split(' ').map(n=>parseInt(n));
    if(A===0 && B===0) break;
    if(A>B){
        console.log(`Yes`)
    }else{
        console.log(`No`)
    }
}