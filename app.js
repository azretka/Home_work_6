function add() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 + num2;
    document.getElementById("result").innerHTML = "result: " + result;
}
function subtract() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 - num2;
    document.getElementById("result").innerHTML = "result: " + result;
}
function divide() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 / num2;
    document.getElementById("result").innerHTML = "result: " + result;
}
function calculate() {
    let operation = document.querySelector('input[name="operation"]:checked').value;
    switch (operation) {
        case "add":
            add();
            break;
        case "subtract":
            subtract();
            break;
        case "divide":
            divide();
            break;
    }
}




