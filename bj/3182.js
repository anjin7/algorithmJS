// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [4,
2,
3,
4,
1];

let N = parseInt(input[0]);
let answer = [];
for(let i=1; i<=N; i++){
    let num = parseInt(input[i])
    let order = [];
    order.push(i);
    order.push(num);

    while(order.includes(input[num])===false){
        order.push(input[num]);
        num=input[num];
    }

    answer.push(order.length)
}

let max = Math.max(...answer);
let indexes = [];
for (let i = 0; i < answer.length; i++) {
    if (answer[i] === max) {
        indexes.push(i+1);
    }
}
console.log(indexes[0]);