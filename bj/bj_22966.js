let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, ...arr] = input;
let list = [];
for(let i=0; i<N; i++){
    let [title, score] = arr[i].split(' ');
    let newArr = [title, parseInt(score)];
    list.push(newArr);
}
list.sort((a,b)=>a[1]-b[1]);
console.log(list[0][0]);