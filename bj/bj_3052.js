// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arr =[];

input.forEach(x => {
    const number = x % 42;
    if(arr.indexOf(number) === -1){
        arr.push(number);
    }
});


console.log(arr.length);