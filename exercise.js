//Ex1


/////replace

/*
const flower = 'azalia';
const searchedLetter = 'a';
const replaceWith = 'x'; 

const xFlower = flower.replaceAll(searchedLetter, replaceWith);

console.log(xFlower);
*/

//let flower = 'azalia';
/*
let flower = 'Magmolia';
let letterA = [];
let letterAUpperCase = [];
let replaceWith = 'k';
let replaceWhat = 'm';
for(key in flower) {
    let letter = flower[key];
    //console.log(letter.toLowerCase());
    if (letter === replaceWhat) {
        letterA.push(key);
        //console.log(key);
    } 
    if (letter.toLowerCase() === replaceWhat) {
        letterAUpperCase.push(key);
        //console.log(key);
       // console.log(flower[key]);
    } 

};
console.log(letterA);

for(key in letterA) {
    flower = flower.split('');
    flower[letterA[key]] = replaceWith.toLowerCase();
    flower = flower.join('');

}
console.log(flower)

for(key in letterAUpperCase) {
    flower = flower.split('');
    flower[letterAUpperCase[key]] = replaceWith.toLowerCase();
    flower = flower.join('');

}

console.log(flower);
*/

///////Split
/*
let flower = 'azalia';
flower = flower.split("");
flower[0] = 'x';
flower[2] = 'x';
flower[5] = 'x';
let result = flower.join("");
console.log(result);
*/




/*TO DO 
1.Zrobić zbiór indeksów literek do zmiany.

2.Zrobić pętlę, która przerobi flower i w tych indeksach podmieni a na x.

3.Przed pętlą podmieniającą zrobić pętlę wyszukującą, które indeksy mają wartość a, zapisać wyniki w zbiorze indeksów do zmiany. */



//Ex2



let reverse;
let input = 'capitalize the first letter';

function reverseString(input) {
   
    let splitString = input.split("");

    let reverseArray = splitString.reverse();

    return reverseArray.join(""); 
/*
    lub  

    return input.split("").reverse().join(""); */
}; 


reverseString(input);
console.log(reverseString(input));

