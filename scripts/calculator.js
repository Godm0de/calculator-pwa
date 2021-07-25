const display = document.getElementById("display");

let resultBool = false;

const options = {
    "=": () => { 
        display.value = eval(display.value.replace("x","*"));
    },
    "DEL": () => { display.value = display.value.slice(0, -1);},
    "RESET": () => { display.value = ""; }
}

const optionsDefault =  (value) => {  display.value += value }

document.getElementById("keypad").addEventListener( "click", (e) => {
    try{
        (e.target.classList.contains("key")) ? (options[e.target.innerText] ? options[e.target.innerText]() : optionsDefault(e.target.innerText)) : null;
     }catch(e){
         if(e instanceof SyntaxError){
             buffer = 0;
             display.value = "SYNTAX ERROR";
         }
     }
});