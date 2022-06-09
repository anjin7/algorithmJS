// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = [5, '1 1', '2 3', '3 4', '9 8', '5 2'];

const [N, ...arr] = input;

for(let i=0; i<N; i++){
    let numarr = arr[i].split(' ');
    let num1 = Number(numarr[0]);
    let num2 = Number(numarr[1]);
    
    console.log(num1+num2);
}