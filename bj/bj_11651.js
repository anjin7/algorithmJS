// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let input = [5, ['0 4'], ['1 2'], ['1 -1'], ['2 2'], ['3 3']];

const [N, ...arr] = input;
const coordinates = arr.map(coord => coord.split(' ').map(n => parseInt(n)))

let result = '';
coordinates.sort((a, b) => {
    if (a[1] !== b[1]){
        return a[1] - b[1];
    }
    return a[0] - b[0];
}).forEach(coord => {
    result += `${coord[0]} ${coord[1]}\n`;
});
console.log(result)