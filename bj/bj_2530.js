let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [hour, min, sec] = input[0].split(' ').map(n=>parseInt(n));
let time = parseInt(input[1]);
time = time + sec;
min = min + Math.floor(time/60);
time = time%60;
hour = hour + Math.floor(min/60);
min = min%60;
hour = hour%24;
console.log(`${hour} ${min} ${time}`)