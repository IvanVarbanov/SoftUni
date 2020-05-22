function oddOccurrences(input) {
    let words = input.split(" ").map((a) => a.toLowerCase());

    let wordTracked = new Map();

    for (const word of words) {
        if (wordTracked.has(word)) {
            wordTracked.set(word, wordTracked.get(word) + 1);
        } else {
            wordTracked.set(word, 1);
        }
    }

    let result = new Array();

    for (const [word, number] of wordTracked) {
        if (number % 2 != 0) {
            result.push(word);
        }
    }
    console.log(result.join(" "));
}

oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
