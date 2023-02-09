//PROBLEM: - napisz funkcję, która jako argument przyjmuje ciąg znaków i zwraca liczbę samogłosek zawartych w tym łańcuchu.
let input = 'aAaA';
let vowels = 'aeiouyAEIOUY';

function countVowels(input) {
    let count = 0;
    for(letter in input) {
        
        if (vowels.includes(input[letter]) === true) {
            count++;
        }
    }
    return count;
}
console.log(countVowels(input));