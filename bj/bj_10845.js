// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [15, `push 1`, `push 2`, `front`, `back`, `size`, `empty`, `pop`, `pop`, `pop`, `size`, `empty`, `pop`, `push 3`, `empty`, `front`];
let [N, ...arr] = input;
let queue = [];
let answer = [];

for(let i=0; i<parseInt(N); i++){
    if(arr[i]==="back"){
        if(queue[queue.length-1]){
            answer.push(queue[queue.length-1]);
        }else{
            answer.push(-1);
        } 
    }else if(arr[i]==="front"){
        if(queue[0]){
            answer.push(queue[0])
        }else{
            answer.push(-1)
        }
    }else if(arr[i]==="size"){
        answer.push(queue.length);
    }else if(arr[i]==="empty"){
        if(queue.length===0){
            answer.push(1)
        }else{
            answer.push(0)
        }
    }else if(arr[i]==="pop"){
        if(queue[0]){
            answer.push(queue[0]);
            queue.shift();
        }else{
            answer.push(-1);
        }
    }else{
        let pushArr = arr[i].split(' ');
        queue.push(pushArr[1]);
    }
}

console.log(answer.join('\n'))