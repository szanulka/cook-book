let inputJoin = [];
let inputSplit = input.split(' ');


for(word in inputSplit) {
    inputJoin.push(capitalizeLetter(inputSplit[word]));
}
result = inputJoin.join(' ');


function capitalizeLetter(input) {
   return input.charAt(0).toUpperCase() + input.slice(1);
    
};
console.log(result);