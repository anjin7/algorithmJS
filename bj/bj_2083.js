let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
for(let i=0; i<input.length; i++){
    let [name, age, weight] = input[i].split(' ');
    if(name==="#")break;
    let answer = [];
    answer.push(name);
    if(parseInt(age)>17 || parseInt(weight)>=80){
        answer.push("Senior")
    }else{
        answer.push("Junior")
    }
    console.log(answer.join(' '))
}