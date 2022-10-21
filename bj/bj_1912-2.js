// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [10,
`2 1 -4 3 4 -4 6 5 -5 1`]
let N = parseInt(input[0]);
let arr = input[1].split(' ').map(n=> parseInt(n));
let sum = 0;
let max = Number.MIN_SAFE_INTEGER;
for(let i=0; i<N; i++){
    for(let j=1; j<=N; j++){
        let sumArr = arr.slice(i,j);
        sum = sumArr.reduce((accumulator, current) => accumulator + current, 0);
        if(sum>max){
            max = sum
        }
    }
}
console.log(max)

// 메모리초과