// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = [['1 1'], ['2 3'], ['3 4'], ['9 8'], ['5 2'], ['0 0']];

for (let i=0; i < input.length - 2; i++){
    let num = input[i].split(' ');
    console.log(Number(num[0]) + Number(num[1]));
};