let palindromTrue = ['kajak'];
let reversedTrue = palindromTrue.reverse();
let palindromFalse = ['statek'];
let reversedFalse = palindromFalse.reverse();


function testPalindromTrue() {
    console.log(reversedTrue === palindromTrue);
    
};

function testPalindromFalse() {
    console.log(reversedFalse === palindromFalse);
};

testPalindromTrue(palindromTrue);
testPalindromFalse(palindromFalse);