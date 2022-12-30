console.log('Form.js działa');

function displayText() {
    let input = document.getElementById('first-form').value;

    if (textValidation(input)==false) {

    

    alert(input);
    }
}

function textValidation(input) {
    let cursesWorlds = ['ass', 'fuck', 'whore', 'gull'];
   return (cursesWorlds.forEach(swearCheck)); 

function swearCheck(item) {
   if (input.includes(item)==true)
    return false;
    

    
}

}