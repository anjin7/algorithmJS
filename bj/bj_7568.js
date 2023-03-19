// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [5,
`55 185`,
`58 183`,
`88 186`,
`60 175`,
`46 155`]
let N = parseInt(input[0]);
let weights = [];
let heights = [];
for(let i=1; i<=N; i++){
    let [weight, height] = input[i].split(' ').map(n=>parseInt(n));
    weights.push(weight);
    heights.push(height);
}
let answer = [];
for(let i=0; i<N; i++){
    let cnt = 1;
    for(let j=0; j<N; j++){
        if(weights[i]<weights[j] && heights[i]<heights[j]) cnt++
    }
    answer.push(cnt)
}
console.log(answer.join(' '))