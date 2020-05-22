function palindrome(numberArray = []) {
    for (let i = 0; i < numberArray.length; i++) {
        let number = numberArray[i].toString();

        if (number[0] == number[number.length - 1]) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}

palindrome([123, 323, 421, 121]);
