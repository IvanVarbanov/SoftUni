function solve() {
    let button = document.getElementsByTagName('button')[0];
    let result = document.getElementById('result');

    let optionList = document.querySelector('#selectMenuTo');
    optionList.innerHTML = `
    <option selected value=""></option>
    <option value="binary">Binary</option>
    <option value="hexadecimal">Hexadecimal</option>`;

    button.addEventListener('click', () => {
        let input = document.getElementById('input').value;
        let select = document.querySelector('#selectMenuTo').value;

        if (optionList.value === 'binary') {
            result.value = Number(input).toString(2);
        } else if (optionList.value === 'hexadecimal') {
            result.value = Number(input).toString(16).toUpperCase();
        }
    });
}
