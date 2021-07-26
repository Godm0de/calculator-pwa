const display = document.getElementById("display");

let resultBool = false;

const options = {
    "=": () => { 
        let result = eval(display.value.replaceAll("x","*"))
        display.value = (result != undefined) ? result: "0";
    },
    "DEL": () => { display.value = display.value.slice(0, -1);},
    "RESET": () => { display.value = ""; }
}

const optionsDefault =  (value) => {  display.value += value }

document.getElementById("keypad").addEventListener( "click", (e) => {
    (e.target.classList.contains("key")) ? (options[e.target.innerText] ? options[e.target.innerText]() : optionsDefault(e.target.innerText)) : null;
});