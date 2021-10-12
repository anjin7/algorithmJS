// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = [['6 8 10'], ['25 52 60'], ['5 12 13']];

for (let i=0; i< input.length; i++){
    let arr = input[i].split(' ');

    let A = Math.pow(Number(arr[0]), 2);
    let B = Math.pow(Number(arr[1]), 2);
    let C = Math.pow(Number(arr[2]), 2);
    
    if(A===0 || B===0 || C===0) break;
    if((A + B === C) || (B + C === A) || (C + A === B)){
        console.log("right");
    } else {
        console.log("wrong");
    };
    
};