let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
let height = 10;
for(let i=1; i<input.length; i++){
    if(input[i]===input[i-1]){
        height += 5;
    }else{
        height += 10;
    }
}
console.log(height)