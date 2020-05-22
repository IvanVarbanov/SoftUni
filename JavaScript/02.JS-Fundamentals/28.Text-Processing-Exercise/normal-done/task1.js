function revealWords(wordsString = "", textString = "") {
    let wordsArr = wordsString.split(", ");
    let textArr = textString.split(" ");

    for (const wordIndex in textArr) {
        if (textArr[wordIndex].startsWith("*")) {
            let wordLength = textArr[wordIndex].length;
            for (const word of wordsArr) {
                if (word.length === wordLength) {
                    textArr[wordIndex] = word;
                    break;
                }
            }
        }
    }

    console.log(textArr.join(" "));
}

revealWords("great, learning", "softuni is ***** place for ******** new programming languages");
