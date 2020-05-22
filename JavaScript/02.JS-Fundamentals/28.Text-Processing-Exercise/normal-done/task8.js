function hardWords(array = []) {
    let textArr = array[0].split(" ");
    let wordsArr = array[1];

    for (const wordIndex in textArr) {
        if (textArr[wordIndex].startsWith("_")) {
            let wordLength = textArr[wordIndex].length;
            let wordEnd = "";

            if (!textArr[wordIndex].endsWith("_")) {
                wordLength--;
                wordEnd = textArr[wordIndex].split("").pop();
            }

            for (word of wordsArr) {
                if (word.length === wordLength) {
                    textArr[wordIndex] = `${word}${wordEnd}`;
                }
            }
        }
    }

    console.log(textArr.join(" "));
}

hardWords([
    "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
    ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
