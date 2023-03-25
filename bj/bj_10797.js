let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let day = parseInt(input[0]);
let cars = input[1].split(' ').map(n=>parseInt(n));
let cnt = 0;
for(let i=0; i<cars.length; i++){
    if(cars[i]===day) cnt++
}
console.log(cnt)