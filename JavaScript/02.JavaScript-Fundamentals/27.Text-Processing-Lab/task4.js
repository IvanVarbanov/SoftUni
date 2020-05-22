function censored(string = "", word) {
    let output = string.replace(word, "*".repeat(word.length));
    while (output.includes(word)) {
        output = output.replace(word, "*".repeat(word.length));
    }
    console.log(output);
}

censored("A small sentence with some small words", "small");
