// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [5,
`100 99 98`,
`100 97 92`,
`63 89 63`,
`99 99 99`,
`89 97 98`,
]
let N = parseInt(input[0]);
let round1 = [];
let round2 = [];
let round3 = [];
for(let i=1; i<=N; i++){
    let arr = input[i].split(' ').map(n=>parseInt(n));
    round1.push(arr[0]);
    round2.push(arr[1]);
    round3.push(arr[2]);
};
for(let i=0; i<round1.length; i++){
    let sum=0;
    if(round1.indexOf(round1[i])===round1.lastIndexOf(round1[i])){
        sum += round1[i];
    }
    if(round2.indexOf(round2[i])===round2.lastIndexOf(round2[i])){
        sum += round2[i];
    }
    if(round3.indexOf(round3[i])===round3.lastIndexOf(round3[i])){
        sum += round3[i];
    }
    console.log(sum);
}