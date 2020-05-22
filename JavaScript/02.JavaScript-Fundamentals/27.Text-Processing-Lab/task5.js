function countString(string = "", wordToCount) {
    let arrWords = string.split(" ");
    let counter = 0;

    for (const word of arrWords) {
        if (word === wordToCount) {
            counter++;
        }
    }
    console.log(counter);
}
countString("This is a word and it also is a sentence", "is");
