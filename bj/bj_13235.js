let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let arr = input.split('');
let answer = true;
for(let i=0; i<arr.length; i++){
    if(arr[i]!==arr[arr.length-1-i]){
        answer = false;
        break;
    }
}
console.log(answer)