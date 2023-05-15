let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
for(let i=0; i<input.length; i++){
    if(input[i]==="#")break
    let arr = input[i].toLowerCase().split('');
    let cnt = 0;
    for(let j=0; j<arr.length; j++){
        if(arr[j]==="a" || arr[j]==="e" || arr[j]==="i" || arr[j]==="o" || arr[j]==="u"){
            cnt++
        }
    }
    console.log(cnt)
}