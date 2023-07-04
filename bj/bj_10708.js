let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M, target, ...arr] = input;
let NN = parseInt(N);
let MM = parseInt(M);
let targetArr = target.split(' ').map(n=>parseInt(n));
let score = [];
for(let i=0; i<NN; i++){
    score.push(0)
};
for(let i=0; i<MM; i++){
    let play = arr[i].split(' ').map(n=>parseInt(n));
    let lose = 0;
    for(let j=0; j<NN; j++){
        if(play[j]===targetArr[i]){
            score[j]++
        }else{
            lose++
        }
    }
    score[targetArr[i]-1] += lose
};
console.log(score.join('\n'))