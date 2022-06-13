// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [14, `push 1`, `push 2`, `top`, `size`, `empty`, `pop`, `pop`, `pop`, `size`, `empty`, `pop`, `push 3`, `empty`, `top`];
let [N, ...arr] = input;
let stack = [];
let answer = [];

for(let i=0; i<parseInt(N); i++){
    if(arr[i]==="top"){
        if(stack[stack.length-1]){
            answer.push(stack[stack.length-1]);
        }else{
            answer.push(-1);
        } 
    }else if(arr[i]==="size"){
        answer.push(stack.length);
    }else if(arr[i]==="empty"){
        if(stack.length===0){
            answer.push(1)
        }else{
            answer.push(0)
        }
    }else if(arr[i]==="pop"){
        if(stack[stack.length-1]){
            answer.push(stack[stack.length-1]);
            stack.pop();
        }else{
            answer.push(-1);
        }
    }else{
        let pushArr = arr[i].split(' ');
        stack.push(pushArr[1]);
    }
}

console.log(answer.join('\n'))