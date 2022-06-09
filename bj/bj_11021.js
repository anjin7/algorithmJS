// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input=[5, '1 1', '2 3', '3 4', '9 8', '5 2'];
const [N, ...arr] = input;

for(let i=0; i<N; i++){
    let num = arr[i].split(' ');
    let sum = Number(num[0])+Number(num[1]); 
    console.log(`Case #${i+1}: ${sum}`);
}