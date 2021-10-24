// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const input =['5 5', '5 7', '7 5'];

const [A, B] = input[0].split(' ');
const [C, D] = input[1].split(' ');
const [E, F] = input[2].split(' ');

let x = 0;
let y = 0;

if(A==C){
    x=E;
    
    if(B==F){
        y=D;
    }else{
        y=B;
    }    
}else if(A==E){
    x=C;
    
    if(B==D){
        y=F;
    }else{
        y=B
    }
}else{
    x=A;
    
    if(B==F){
        y=D;
    }else{
        y=F;
    }
};

console.log(`${x} ${y}`);