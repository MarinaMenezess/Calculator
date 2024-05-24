const display = document.querySelector('.display');

function appendCharacter(char) {
   if(display.textContent == '0' && char != '.'){
        display.textContent = char;
   } else{
        if(!(char == '.' && display.textContent[display.textContent.length-1] == '.')){
            display.textContent += char;
        }
   }
}

function clearDisplay() {
    display.textContent = '0';
}

function result() {
    display.textContent = eval(display.textContent)
}