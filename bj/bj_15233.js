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
    let [numA, numB, score] = input[0].split(' ').map(n=>parseInt(n));
    let teamA = input[1].split(' ');
    let teamB = input[2].split(' ');
    let arrS = input[3].split(' ');
    let scoreA = 0;
    let scoreB = 0;
    for(let i=0; i<score; i++){
        if(teamA.includes(arrS[i])) scoreA++;
        if(teamB.includes(arrS[i])) scoreB++;
    }
    if(scoreA>scoreB){
        console.log("A")
    }else if(scoreA<scoreB){
        console.log("B")
    }else{
        console.log("TIE")
    }
    process.exit();
  });