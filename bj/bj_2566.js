// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [
  `3 23 85 34 17 74 25 52 65`,
  `10 7 39 42 88 52 14 72 63`,
  `87 42 18 78 53 45 18 84 53`,
  `34 28 64 85 12 16 75 36 55`,
  `21 77 45 35 28 75 90 76 1`,
  `25 87 65 15 28 11 37 28 74`,
  `65 27 75 41 7 89 78 64 39`,
  `47 47 70 45 23 65 3 41 44`,
  `87 13 82 38 31 12 29 29 80`,
];
let N = input.length;
let row = [];
for(let i=0; i<N; i++){
    let arr = input[i].split(' ').map(n=>parseInt(n));
    row.push(arr);
};
let max = 0;
for(let i=0; i<N; i++){
    for(let j=0; j<N; j++){
        if(row[i][j]>=max){
            max = row[i][j];
        }
    }
}
console.log(max);

let answer = [];
for(let i=0; i<N; i++){
    if(row[i].includes(max)){
        let col = row[i].indexOf(max);
        answer.push(i+1, col+1)
    }
}
console.log(answer.join(' '));