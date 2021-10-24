// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let input = [['6 8 10'], ['25 52 60'], ['5 12 13']];

let result = [];

for (let i=0; i< input.length - 1; i++){
    let arr = input[i].split(' ').map(n => Number(n));

    let A = Math.pow(arr[0], 2);
    let B = Math.pow(arr[1], 2);
    let C = Math.pow(arr[2], 2);
    
    if(A===0 || B===0 || C===0) break;
    if((A + B === C) || (B + C === A) || (C + A === B)){
        result.push("right");
    } else {
        result.push("wrong");
    };    
};
console.log(result.join('\n'));
