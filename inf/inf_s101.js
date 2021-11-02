//최소값 찾기

function solution(a, b, c){
  let result;
  if(a<b) result=a;
  else result=b;
  if(c<result) result=c;
  return result;
}
console.log(solution(6, 5, 11));

