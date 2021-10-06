// let fs= require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let input = [10, 2];

const A = parseInt(input[0]);
const B = parseInt(input[1]);

if(A>B) {
    console.log('>');
} else if(A<B) {
    console.log('<');
} else {
    console.log('==');
};