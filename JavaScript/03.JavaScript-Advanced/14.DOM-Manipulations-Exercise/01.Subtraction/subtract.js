function subtract() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    let resultDiv = document.getElementById('result');

    let result = Number(firstNumber) - Number(secondNumber);
    resultDiv.textContent = result;
}
