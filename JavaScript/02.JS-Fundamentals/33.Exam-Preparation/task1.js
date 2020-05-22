function emailValidator(array = []) {
    let email = array.shift();

    for (const line of array) {
        let [command, type] = line.split(" ");

        switch (command) {
            case "Make":
                email = chageLetters(email, type);
                console.log(email);
                break;
            case "GetDomain":
                getDomain(email, type);
                break;
            case "GetUsername":
                getUsername(email);
                break;
            case "Replace":
                email = replace(email, type);
                console.log(email);
                break;
            case "Encrypt":
                console.log(encrypt(email).join(" "));
                break;
        }
    }

    function encrypt(text) {
        return text.split("").map((c) => c.charCodeAt(0));
    }

    function replace(text, symbol) {
        let result;
        while (result !== text) {
            result = text;
            text = text.replace(symbol, "-");
        }
        return result;
    }

    function getUsername(email) {
        let emailPattern = /[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+/gm;

        if (emailPattern.test(email) == false) {
            console.log(`The email ${email} doesn't contain the @ symbol.`);
        } else {
            let result = email.split("@");
            console.log(result[0]);
        }
    }

    function getDomain(text, NumLastLetters) {
        let result = text.substring(text.length - NumLastLetters);
        console.log(result);
    }

    function chageLetters(text, type) {
        if (type === "Upper") {
            return text.toUpperCase();
        } else {
            return text.toLowerCase();
        }
    }
}

emailValidator(["Mike123@somemail.com", "Make Upper", "GetDomain 3", "GetUsername", "Encrypt", "Complete"]);
console.log();
emailValidator(["AnotherMail.com", "Make Lower", "GetUsername", "Replace a", "Complete", ""]);
// console.log();
// emailValidator(["Another@Mail.com", "Make Lower", "GetUsername", "GetDomain 3", "Encrypt", "Complete"]);
