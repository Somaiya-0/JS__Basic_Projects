// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        let result = new Function(`return ${display.value}`)();
        result=Math.round(result*100)/100;
        display.value= result;
    }
    catch(error){
        display.value = "Error";
    }
}