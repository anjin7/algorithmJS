// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`4 2`,
`1 3 0 0`,
`3 0 0 2`,
`4 0 2 0`,
`2 0 2 0`]

let [N, K] = input[0].split(' ').map(n => parseInt(n));
let arr = [];
let rankArr = [];
for(let i=1; i<=N; i++){
    let country = input[i].split(' ').map(n=>parseInt(n));
    arr.push(country)
};
for(let i=0; i<N; i++){
    let rank = 1;
    for(let j=0; j<N; j++){
        if(arr[i][1]<arr[j][1]){
            rank++
        }else if(arr[i][2]<arr[j][2]){
            rank++
        }else if(arr[i][3]<arr[j][3]){
            rank++
        }
    }
    rankArr.push(rank)
}
let idx = 0;
for(let i=0; i<N; i++){
  if(arr[i][0]===K){
    idx += i
  }
}
console.log(rankArr[idx])


// 20점