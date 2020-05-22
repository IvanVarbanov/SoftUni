function secretChat(array = []) {
    let message = array.shift();

    for (const line of array) {
        let [command, optionOne, optionTwo] = line.split(":|:");

        if (command === "InsertSpace") {
            message = insertSpace(message, optionOne);
        } else if (command === "Reverse") {
            message = reverse(message, optionOne);
        } else if (command === "ChangeAll") {
            message = changeAll(message, optionOne, optionTwo);
        } else {
            console.log(`You have a new text message: ${message}`);
        }
    }

    function changeAll(text, optionOne, optionTwo) {
        let res;
        while (res !== text) {
            res = text;
            text = text.replace(optionOne, optionTwo);
        }
        console.log(res);
        return res;
    }

    function reverse(text, string) {
        if (text.indexOf(string) !== -1) {
            text = text.replace(string, "").concat(string.split("").reverse().join(""));
            console.log(text);
            return text;
        } else {
            console.log("error");
        }

        return text;
    }

    function insertSpace(text, position) {
        let res = text.split("");
        res.splice(position, 0, " ");
        console.log(res.join(""));
        return res.join("");
    }
}

secretChat(["heVVodar!gniV", "ChangeAll:|:V:|:l", "Reverse:|:!gnil", "InsertSpace:|:5", "Reveal"]);
console.log();
secretChat([
    "Hiware?uiy",
    "ChangeAll:|:i:|:o",
    "Reverse:|:?uoy",
    "Reverse:|:jd",
    "InsertSpace:|:3",
    "InsertSpace:|:7",
    "Reveal",
]);
