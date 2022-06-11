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
let answer = [];

const poketBook = new Map(book.map((v, i) => [v, i+1]));

poketmon.forEach(v => {
    if (Number.isNaN(+v)) answer.push(poketBook.get(v));
    else answer.push(book[+v-1]);
});

console.log(answer.join('\n'));