//특정 알파벳 갯수 세기
function solution(s, t){
  let answer=0;
  for(let x of s){
      if(x===t) answer++;
  }
  
  return answer;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));