// let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let input = [`5`, `5`];
let [X, Y] = input;
function Rev(string){
    let arr = string.split('');
    arr.reverse();
    return arr.join('')
}
let revX = parseInt(Rev(X));
let revY = parseInt(Rev(Y));
let answer = String(revX+revY);
console.log(parseInt(Rev(answer)))