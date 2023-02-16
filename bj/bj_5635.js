// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [5,
`Mickey 1 10 1991`,
`Alice 30 12 1990`,
`Tom 15 8 1993`,
`Jerry 18 9 1990`,
`Garfield 20 9 1990`,];
let [N, ...arr] = input;
let students = [];
let answer = [];
for(let i=0; i<N; i++){
    let [name, ...birth] = arr[i].split(' ');
    let [day, month, year] = birth.map(n=>parseInt(n));
    let newArr = [name, day, month, year];
    students.push(newArr)
}
students.sort((a,b)=> (a[3]-b[3]) || (a[2]-b[2]) || (a[1]-b[1]));
answer.push(students[N-1][0]);
answer.push(students[0][0]);
console.log(answer.join('\n'))