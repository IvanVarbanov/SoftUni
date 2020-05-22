function wordsTracker(input = []) {
    let words = new Map();
    let wordToTrack = input.shift().split(" ");

    for (const word of wordToTrack) {
        words.set(word, 0);
    }

    for (const word of input) {
        if (words.has(word)) {
            words.set(word, words.get(word) + 1);
        }
    }

    let sortedWords = Array.from(words).sort((a, b) => b[1] - a[1]);

    for (const [word, count] of sortedWords) {
        console.log(`${word} - ${count}`);
    }
}

wordsTracker([
    "this sentence",
    "In",
    "this",
    "sentence",
    "you",
    "have",
    "to",
    "count",
    "the",
    "occurances",
    "of",
    "the",
    "words",
    "this",
    "and",
    "sentence",
    "because",
    "this",
    "is",
    "your",
    "task",
]);
