// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [2,
5,
`1 1 1 1 1`,
7,
`1 2 3 4 5 6 7`,]
let T = parseInt(input[0]);
for(let i=1; i<=2*T; i++){
    let sum = 0;
    if(i%2===0){
        let arr = input[i].split(' ').map(n=>parseInt(n));
        for(let j=0; j<arr.length; j++){
            sum += arr[j]
        }
        console.log(sum)
    }
}