const display = document.getElementById("display");

let buffer = 0;
let resultBool = false;

const options = {
    "=": () => { 
        buffer = eval(buffer + display.value.replace("x","*"));
        display.value = buffer;
        resultBool = true;
    },
    "DEL": () => { display.value = display.value.slice(0, -1);},
    "RESET": () => {  buffer = 0; display.value = ""; }
}

<<<<<<< HEAD
const commonKeys =  (value) => { display.value = (resultBool) ? value : ( display.value + value ); resultBool = false;}

document.getElementById("keypad").addEventListener( "click", (e) => {
    try{
        (e.toElement.className === "key") ? (options[e.target.defaultValue] ? options[e.target.defaultValue]() : commonKeys(e.target.defaultValue)) : '';
=======
const buttonsDefault =  (value) => {  display.value = (resultBool) ? value : ( display.value + value ); resultBool = false; }

document.getElementById("keypad").addEventListener( "click", (e) => {
    try{
        (e.target.classList.contains("key")) ? (buttons[e.target.innerText] ? buttons[e.target.innerText]() : buttonsDefault(e.target.innerText)) : null;
>>>>>>> develop
     }catch(e){
         if(e instanceof SyntaxError){
             buffer = 0;
             display.value = "SYNTAX ERROR";
         }
     }
});