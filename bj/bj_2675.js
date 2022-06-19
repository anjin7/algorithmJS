// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [2, `3 ABC`, `5 /HTP`];
let [N, ...arr] = input;

for(let i=0; i<N; i++){
    let answer = "";
    let [num, str] = arr[i].split(' ');
    
    for(let j=0; j<str.length; j++){
        for(let k=0; k<num; k++){
            answer += str[j]
        }
    }
    console.log(answer);
}
