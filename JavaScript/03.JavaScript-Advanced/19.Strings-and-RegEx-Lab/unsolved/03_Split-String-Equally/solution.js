function solve() {
    const text = document.getElementById('text').value;
    const number = document.getElementById('number').value;
    const result = document.getElementById('result');

    result.innerText = spllitStringEqually(text, Number(number));

    function spllitStringEqually(string, n) {
        if (string.length > n && string.length % n !== 0) {
            let newStr = string.slice(0, string.length % n);
            string = string + newStr;
        } else if (string.length < n && string.length % n !== 0) {
        }

        let output = string.split('').map((letter, index) => {
            if ((index + 1) % n === 0) {
                return letter + ' ';
            } else {
                return letter;
            }
        });

        return output.join('');
    }
}
