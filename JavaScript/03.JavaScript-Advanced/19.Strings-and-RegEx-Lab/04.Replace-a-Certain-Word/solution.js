function solve() {
    let word = document.getElementById('word').value;
    let txt = document.getElementById('text').value;
    let result = document.getElementById('result');
    let arr = JSON.parse(txt);

    let wordToReplace = arr[0].split(' ')[2].toLowerCase();
    let pattern = new RegExp(wordToReplace, 'gmi');

    arr.forEach((element) => {
        result.innerHTML += `
        <div>${element.replace(pattern, word)}</div>
        `;
    });
}
