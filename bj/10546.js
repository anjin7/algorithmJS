// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [
4,
`mislav`,
`stanko`,
`mislav`,
`ana`,
`stanko`,
`ana`,
`mislav`
]
let N = parseInt(input[0]);
let name = input.slice(1,N+1);
let winner = input.slice(N+1);
for(let i=0; i<N-1; i++){
    let idx = name.indexOf(winner[i]);
    if(idx>-1) name.splice(idx,1)
}
console.log(name[0])

// 시간초과


let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0]);
let name = input.slice(1,N+1);
let winner = input.slice(N+1);
let list = new Set(name);
for(let i=0; i<(N-1); i++){
    if(list.has(winner[i])){
        list.delete(winner[i])
    }
}
let answer = [...list];
console.log(answer[0])

// 이름의 중복이 있어서 set으로는 풀 수 없음