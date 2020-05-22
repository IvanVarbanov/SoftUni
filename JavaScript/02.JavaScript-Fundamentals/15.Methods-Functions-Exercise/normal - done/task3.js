function charRange(char1, char2) {
    const start = (a) => a.charCodeAt(0) + 1;
    const end = (b) => b.charCodeAt(0);

    let result = [];

    if (start(char1) < end(char2)) {
        for (let i = start(char1); i < end(char2); i++) {
            result.push(String.fromCharCode(i));
        }
    } else {
        for (let i = start(char2); i < end(char1); i++) {
            result.push(String.fromCharCode(i));
        }
    }

    return result.join(" ");
}

let result = charRange("C", "#");
console.log(result);
