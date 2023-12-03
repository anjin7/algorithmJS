let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
for(let i=0; i<input.length; i++){
    if(input[i]==="0")break;
    let [N, ...arr] = input[i].split(' ').map(n=>parseInt(n));
    let newArr = [];
    for(let j=0; j<arr.length; j++){
        if(j===0){
            newArr.push(arr[j])
        }else{
            if(arr[j]!==arr[j-1]){
                newArr.push(arr[j])
            }
        }
    }
    newArr.push("$")
    console.log(newArr.join(' '))
}