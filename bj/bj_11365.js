let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
for(let i=0; i<input.length; i++){
    if(input[i]==="END")break
    let arr = input[i].split('');
    arr.reverse();
    console.log(arr.join(''))
}