function replaceRepeating(string = "") {
    let output = new Array();

    for (const letter in string) {
        if (letter == 0) {
            output.push(string[letter]);
        } else if (string[letter] !== string[letter - 1]) {
            output.push(string[letter]);
        }
    }
    console.log(output.join(""));
}

replaceRepeating("aaaaabbbbbcdddeeeedssaa");
