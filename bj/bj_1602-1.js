// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`26 5`, 
'Bulbasaur', 
'Ivysaur', 
'Venusaur', 
'Charmander', 
'Charmeleon', 
'Charizard', 
'Squirtle', 
'Wartortle', 
'Blastoise', 
'Caterpie', 
'Metapod', 
'Butterfree', 
'Weedle', 
'Kakuna', 
'Beedrill', 
'Pidgey', 
'Pidgeotto', 
'Pidgeot', 
'Rattata', 
'Raticate', 
'Spearow', 
'Fearow', 
'Ekans', 
'Arbok', 
'Pikachu', 
'Raichu', 
'25', 
'Raichu', 
'3', 
'Pidgey', 
'Kakuna']

let [N, M] = input[0].split(' ').map(Number);
let book = input.slice(1, N+1);
let poketmon = input.slice(N+1, N+M+1);

const findPoketName = (name) => {
  return book.indexOf(name);
};
const findPoketId = (id) => {
  return book[id];
};

let arr =[];
for(let i=0; i<M; i++){
    if(isNaN(poketmon[i])){
      arr.push(findPoketName(poketmon[i])+1);
    }else{
      arr.push(findPoketId(poketmon[i]-1));
    };
};

console.log(arr.join('\n'));

// time-over