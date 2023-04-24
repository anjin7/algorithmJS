let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let T = parseInt(input[0]);
for(let i=1; i<=T; i++){
    let [N, M]= input[i].split(' ').map(n=>parseInt(n));
    let cnt = 0;
    for(let j=N; j<=M; j++){
        let stringNum = j.toString();
        let arr = stringNum.split('');
        for(let k=0; k<arr.length; k++){
            if(arr[k]==="0")cnt++
        }
    }
    console.log(cnt)
}