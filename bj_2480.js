// const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const input = [2, 2, 2]

let arr = input.map(Number).sort((a, b) => b - a);
const [max, mid, min] = arr;

function dice(A, B, C){
    let result = 0;
    
    if(A===B && B===C){
        result=10000+(A*1000);
    }else if(A===B && A!==C){
        result=1000+(A*100);
    }else if(B===C && A!==B){
        result=1000+(B*100);
    }else{
        result=(A*100);
    }
    return result;
};
console.log(dice(max, mid, min));