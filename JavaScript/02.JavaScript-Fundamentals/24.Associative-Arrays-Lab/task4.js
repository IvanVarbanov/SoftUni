function wordOccurrences(input = []) {
    let words = new Map();

    for (const word of input) {
        if (words.has(word)) {
            words.set(word, words.get(word) + 1);
        } else {
            words.set(word, 1);
        }
    }

    let sortedWords = Array.from(words).sort((a, b) => b[1] - a[1]);

    for (const [word, number] of sortedWords) {
        console.log(`${word} -> ${number} times`);
    }
}

wordOccurrences([
    "Here",
    "is",
    "the",
    "first",
    "sentence",
    "Here",
    "is",
    "another",
    "sentence",
    "And",
    "finally",
    "the",
    "third",
    "sentence",
]);
