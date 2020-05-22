function solve() {
    let button = document.getElementsByTagName('input')[2];
    let result = document.getElementById('result');

    let text = document.getElementById('text').value;
    let namingConvention = document.getElementById('naming-convention').value;
    result.innerText = pascalOrCamelCase(text, namingConvention);

    function pascalOrCamelCase(input, currentCase) {
        if (currentCase === 'Camel Case') {
            let output = input
                .toLowerCase()
                .split(' ')
                .map((word, index) => {
                    if (index !== 0) {
                        let wordArr = word.split('');
                        wordArr[0] = wordArr[0].toUpperCase();
                        return wordArr.join('');
                    } else {
                        return word;
                    }
                });
            return output.join('');
        } else if (currentCase === 'Pascal Case') {
            let output = input
                .toLowerCase()
                .split(' ')
                .map((word) => {
                    let wordArr = word.split('');
                    wordArr[0] = wordArr[0].toUpperCase();
                    return wordArr.join('');
                });
            return output.join('');
        } else {
            return 'Error!';
        }
    }
}
