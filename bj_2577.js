// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = [150, 266, 427];

let num = String(input[0] * input[1] * input [2]);

for (let i=0; i<10; i++){
    let count = 0;
    
    for(let j=0; j<num.length; j++){
        if(Number(num[j]) === i){
            count+=1;
        }
    }
    console.log(count);
}