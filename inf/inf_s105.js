function solution(arr){
  let answer = Math.min(...arr);
  return answer;
}
let arr = [5, 7, 2, 3, 2, 9, 11];
console.log(solution(arr));