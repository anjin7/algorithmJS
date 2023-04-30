let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0]);
let arr = input[1].split('');
let leng = arr.length;
for(let i=2; i<=N; i++){
    let word = input[i].split('');
    for(let j=0; j<leng; j++){
        if(word[j]!==arr[j]){
            arr[j] = "?"
        }
    }    
}
console.log(arr.join(''))