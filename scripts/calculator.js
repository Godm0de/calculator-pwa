const display = document.getElementById("display");

let buffer = 0;
let resultBool = false;

const buttons = {
    "=": () => { 
        buffer = eval(buffer + display.value.replace("X","*"));
        display.value = buffer;
        resultBool = true;
    },
    "DEL": () => { display.value = display.value.slice(0, -1);},
    "RESET": () => {  buffer = 0; display.value = ""; }
}

const buttonsDefault =  (value) => { display.value = (resultBool) ? value : ( display.value + value ); resultBool = false;}

document.getElementById("keypad").addEventListener( "click", (e) => {
    try{
        (e.toElement.className === "key") ? (buttons[e.target.defaultValue] ? buttons[e.target.defaultValue]() : buttonsDefault(e.target.defaultValue)) : '';
     }catch(e){
         if(e instanceof SyntaxError){
             buffer = 0;
             display.value = "Syntax Error";
         }
     }
});