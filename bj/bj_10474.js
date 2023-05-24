let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
for(let i=0; i<input.length; i++){
    let arr = input[i].split(' ').map(n=>parseInt(n));
    if(arr[0]===0 && arr[1]===0)break;
    let share = Math.floor(arr[0]/arr[1]);
    let rest = arr[0]%arr[1];
    console.log(`${share} ${rest} / ${arr[1]}`)
}