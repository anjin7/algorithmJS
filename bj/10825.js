// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [12,
`Junkyu 50 60 100`,
`Sangkeun 80 60 50`,
`Sunyoung 80 70 100`,
`Soong 50 60 90`,
`Haebin 50 60 100`,
`Kangsoo 60 80 100`,
`Donghyuk 80 60 100`,
`Sei 70 70 70`,
`Wonseob 70 70 90`,
`Sanghyun 70 70 80`,
`nsj 80 80 80`,
`Taewhan 50 60 90`,]
let [N, ...arr] = input;
let students = [];
let answer = [];
for(let i=0; i<N; i++){
    let [name, ...score] = arr[i].split(' ');
    let [kor, eng, math] = score.map(n=>parseInt(n));
    let newArr = [name, kor, eng, math];
    students.push(newArr)
}
students.sort((a,b)=>(b[1]-a[1]) || (a[2]-b[2]) || (b[3]-a[3]) || (a[0].localeCompare(b[0])));
// console.log(students)
for(let i=0; i<N; i++){
  answer.push(students[i][0])
}
console.log(answer.join('\n'))