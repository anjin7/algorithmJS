let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, ...arr] = input;
for(let i=0; i<N; i++){
    let list = arr[i].split('');
    let answer = [];
    for(let j=0; j<list.length; j++){
        if(j===0){
            answer.push(list[j])
        }else{
            if(list[j]!==list[j-1]){
                answer.push(list[j])
            }
        }
    }
    console.log(answer.join(''))
}