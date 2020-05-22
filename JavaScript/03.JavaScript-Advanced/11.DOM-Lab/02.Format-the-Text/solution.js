function solve() {
    let output = document.getElementById('output');
    let text = document.getElementById('input').textContent;
    textArr = text
        .split('.')
        .filter((el) => el.length > 0)
        .map((el) => el + '.');

    for (let i = 0; i < textArr.length; i += 3) {
        let formatedText;
        if (textArr[i + 2]) {
            formatedText = textArr[i] + textArr[i + 1] + textArr[i + 2];
        } else if (textArr[i + 1]) {
            formatedText = textArr[i] + textArr[i + 1];
        } else {
            formatedText = textArr[i];
        }
        let p = document.createElement('p');
        p.textContent = formatedText;
        output.appendChild(p);
    }
}
