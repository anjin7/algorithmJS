// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input =[4,
`Baha enter`,
`Askar enter`,
`Baha leave`,
`Artem enter`,
]

let N = parseInt(input[0]);
let answer = []
for(let i=1; i<=N; i++){
    let record = input[i].split(' ');
    let name = record[0];
    let enter = record[1];
    if(enter==="enter"){
        answer.push(name)
    }else if(enter==="leave"){
        let index = answer.indexOf(name);
        answer.splice(index,1);
    }
}
answer.sort();
answer.reverse();
console.log(answer.join('\n'))


//시간초과