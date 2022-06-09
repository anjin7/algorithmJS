function solution(s){         
  let answer=0;
  for(let x of s){
    let num = x.charCodeAt();
    if (num >= 65 && num <= 95) answer++;
  }
  return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));

// 아스키코드 (num.charCodeAt())
// 대문자 65~90
// 소문자 97~122