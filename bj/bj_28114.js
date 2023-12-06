// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`600 2018 AHN`,
  `2000 2019 LEE`,
  `6000 2020 OH`];
let arr = [];
for(let i=0; i<3; i++){
    let [Q, Y, N] = input[i].split(' ');
    let list = [parseInt(Q), parseInt(Y), N];
    arr.push(list);
};
let yearArr = arr.sort((a,b) => a[1]-b[1]);
let answer1 = [];
for(let i=0; i<3; i++){
    let year = yearArr[i][1].toString().split('');
    let last = year[2]+year[3];
    answer1.push(last)
}
console.log(answer1.join(''));

let quizArr = arr.sort((a,b) => b[0]-a[0]);
let answer2 = [];
for(let i=0; i<3; i++){
    let name = quizArr[i][2].split('');
    answer2.push(name[0])
};
console.log(answer2.join(''))