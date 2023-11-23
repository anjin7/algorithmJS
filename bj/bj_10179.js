// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [3,
100.00,
59.99,
20.00];
let [N, ...arr] = input;
for(let i=0; i<parseInt(N); i++){
    let price = (arr[i])*100;
    let answer = (price*(0.8)/100).toFixed(2)
    console.log("$"+answer)
}