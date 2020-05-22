function passwordGenerator(array = []) {
    let [first, secound, word] = array;
    let pass = `${first}${secound}`.toLowerCase().split("");

    word = word.toUpperCase();

    let counter = 0;

    for (const letter in pass) {
        if (
            pass[letter] === "a" ||
            pass[letter] === "e" ||
            pass[letter] === "i" ||
            pass[letter] === "o" ||
            pass[letter] === "u"
        ) {
            counter++;
            let counter2 = counter - 1;
            let newLetterIndex = -1;
            while (counter2 >= 0) {
                newLetterIndex++;
                if (newLetterIndex > word.length - 1) {
                    newLetterIndex = 0;
                }
                counter2--;
            }

            pass[letter] = word[newLetterIndex];
        }
    }

    pass.reverse();

    console.log(`Your generated password is ${pass.join("")}`);
}

//The vowels are A, E, I, O, and U.
passwordGenerator(["ilovepizza", "ihatevegetables", "orange"]);
// passwordGenerator(["easymoneyeazylife", "atleasttencharacters", "absolute"]);
// passwordGenerator(["areyousureaboutthisone", "notquitebutitrustyou", "disturbed"]);
