function string(word, string = "") {
    let wordLowerCase = word.toLowerCase();
    let stringLowerCase = string.toLowerCase();

    if (stringLowerCase.includes(wordLowerCase)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

string("javas cript", "JavaS cript is the best programming language");
