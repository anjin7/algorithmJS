let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, ...arr] = input;
let list = [];
for(let i=0; i<parseInt(N); i++){
    let row = arr[i].split('');
    list.push(row)
};
let answer = 0;
for(let i=0; i<parseInt(N); i++){
    for(let j=0; j<parseInt(N); j++){
        if(list[i][j]!==list[j][i]){
            answer++
        }
    }
}
if(answer===0){
    console.log("YES")
}else{
    console.log("NO")
}