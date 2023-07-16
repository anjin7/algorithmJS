// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [8,
`sbrus.txt`,
`spc.spc`,
`acm.icpc`,
`korea.icpc`,
`sample.txt`,
`hello.world`,
`sogang.spc`,
`example.txt`]
let [N, ...arr] = input;
let extension = [];
for(let i=0; i<parseInt(N); i++){
    let extendArr = arr[i].split('.');
    extension.push(extendArr[1]);
}
extension.sort();
let extendSet = new Set(extension);
let nameArr = [...extendSet];
let cntArr = [];
for(let i=0; i<nameArr.length; i++){
    cntArr.push(0)
}
for(let i=0; i<parseInt(N); i++){
    for(let j=0; j<nameArr.length; j++){
        if(extension[i]===nameArr[j]){
            cntArr[j]++
        }
    }
}
let answer = []
for(let i=0; i<nameArr.length; i++){
    answer.push(`${nameArr[i]} ${cntArr[i]}`)
}
console.log(answer.join('\n'))


// 시간초과
// VSC에서는 출력됨