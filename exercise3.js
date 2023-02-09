let numbers = 50;

for(let i=1; i<=numbers; i++){
    if (i % 3 === 0  && i % 5 === 0) {
        console.log('Fizz Buzz', i)
    } else if(i % 3 === 0) {
        console.log('Fizz', i );
    } else if (i % 5 === 0) {
        console.log('Buzz', i);
    }    
}
