// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input =['5 21', '5 6 7 8 9'];

const [N, M]= input[0].split(' ');
const arr = input[1].split(' ').map(num => Number(num));
let max = 0;

for(let i=0; i<N-2; i++){
    for(let j=i+1; j<N-1; j++){
        for(let k=j+1; k<N; k++){
            let sum = arr[i] + arr[j]+ arr[k];
            if(sum>max && sum<=M){
                max = sum;
            }
        }
    }
}
console.log(max);