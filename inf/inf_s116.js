//중복되는 문자 제거

function solution(s){  
  let answer="";
  for(let i=0; i<s.length; i++){
      if(s.indexOf(s[i])===i) answer+=s[i];
  }    
  return answer;
}
console.log(solution("ksekkset"));

function result(a){
  let answer = 0;
  let pos=a.indexOf('k');
  while(pos!==-1){
    answer++;
    pos.a.indexOf('k', pos+1);
  }
  return answer;
}
console.log(result("ksekkset"));