// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let input =[5, '5 50 50 70 80 100', '7 100 95 90 80 70 60 50', '3 70 90 80', '3 70 90 81', '9 100 99 98 97 96 95 94 93 91'];

let C = Number(input[0]);

for(let i=1; i<=C; i++){
    let arr = input[i].split(' ');
    let N = Number(arr[0]);
    let sum = 0;
    for (let j=1; j<=N; j++){
        sum += Number(arr[j]);
    };
    let avg = sum/N;    
    let high = 0;
    for(let k=1; k<=N; k++){
        if(arr[k]>avg){
            high++;
        };
    }
    let result = (high / N * 100).toFixed(3);
    console.log(`${result}%`);
}