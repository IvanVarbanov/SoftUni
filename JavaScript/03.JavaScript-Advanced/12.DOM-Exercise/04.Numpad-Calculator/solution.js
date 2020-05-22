function solve() {
    let expressionOutput = document.getElementById('expressionOutput');
    let resultOutput = document.getElementById('resultOutput');

    let operators = ['+', '-', '*', '/'];
    let operations = {
        '+': (num1, num2) => Number(num1) + Number(num2),
        '-': (num1, num2) => Number(num1) - Number(num2),
        '*': (num1, num2) => Number(num1) * Number(num2),
        '/': (num1, num2) => Number(num1) / Number(num2),
    };

    document.getElementsByClassName('clear')[0].addEventListener('click', () => {
        expressionOutput.innerHTML = '';
        resultOutput.innerHTML = '';
    });

    document.querySelectorAll('.keys button').forEach((button) => {
        button.addEventListener('click', (el) => {
            console.log(el);

            if (el.target.value !== '=' && !operators.includes(el.target.value)) {
                expressionOutput.innerHTML += el.target.value;
            } else if (operators.includes(el.target.value)) {
                expressionOutput.innerHTML += ` ${el.target.value} `;
            } else {
                let params = expressionOutput.innerHTML.split(' ');
                if (params[2]) {
                    resultOutput.innerHTML = operations[params[1]](params[0], params[2]);
                } else {
                    resultOutput.innerHTML = NaN;
                }
            }
        });
    });
}
