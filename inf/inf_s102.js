//삼각형 판별하기

function solution(a, b, c){
  let answer="YES";
  let max = 0;
  let sum = a+b+c;

  if(a>b) max=a;
  else max=b;
  if(c>max) max=c;
  
  if((sum-max)<=max) answer="NO"
  return answer;
}
console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));