const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
    
let [N, ...arr] = input;
let sortArr = arr.map(n=>n).sort();
let revArr = arr.map(n=>n).sort().reverse();
let sortCnt = 0;
let revCnt = 0;
for(let i=0; i<arr.length; i++){
    if(arr[i]===sortArr[i]){
        sortCnt++
    }
    if(arr[i]===revArr[i]){
        revCnt++
    }
}
if(sortCnt===parseInt(N)){
    console.log("INCREASING")
}else if(revCnt===parseInt(N)){
    console.log("DECREASING")
}else{
    console.log("NEITHER")
}
  process.exit();
});