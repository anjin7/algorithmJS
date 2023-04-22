// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [
    6,
`(())())`,
`(((()())()`,
`(()())((()))`,
`((()()(()))(((())))()`,
`()()()()(()()())()`,
`(()((())()(`,
]
let N = parseInt(input[0]);

for(let i=1; i<=N; i++){
    let arr = input[i].split('');
    if(arr[0]===`)`){
        console.log("NO")
    }else{
        
    }
}
// 틀림->수정중