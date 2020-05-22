function hashtag(strig = "") {
    wordArr = strig.split(" ");

    let onlyLettersWordsArr = [];

    for (const word of wordArr) {
        if (word.startsWith("#") && word.length > 1) {
            let letters = word.toLowerCase().substring(1).split("");
            let isValid = true;
            for (const letter of letters) {
                let charCode = letter.charCodeAt(0);
                if (charCode < 96 || charCode > 122) {
                    isValid = false;
                    break;
                }
            }
            if (isValid) {
                onlyLettersWordsArr.push(word.substring(1));
            }
        }
    }

    for (const word of onlyLettersWordsArr) {
        console.log(word);
    }
}

hashtag("Nowadays everyone uses # to tag a #special word in #socialMedia");
