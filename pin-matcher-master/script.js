function calculate(num) {
    document.getElementById("input-number-show").value += num;
}

function valueMatchingSubmit() {

    var inputNumber = document.getElementById("input-number-show").value;
    var pinNumber = document.getElementById("input-pin").value;

    if (inputNumber == pinNumber) {
        document.getElementById("Matched").style.display = 'block';
        document.getElementById("not-matched").style.display = "none"
    } else {
        document.getElementById("not-matched").style.display = "block"
        document.getElementById("Matched").style.display = 'none';
    }
    var inputNumber = document.getElementById("input-number-show").value='';

}

function randomPin() {
    var seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    document.getElementById("input-pin").value = seq;
    // document.getElementById("input-pin").value = '';

}

function clearAll(){
    var inputNumber = document.getElementById("input-number-show").value='';
}
function lastnumber() {
    // "use strict";
    var inputNumber = document.getElementById("input-number-show");
    var    clearLast = inputNumber.value;
    inputNumber.value=clearLast.substring(0, inputNumber.length - 1);
};