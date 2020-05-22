function palindrome(numberArray = []) {
    function isPalidrome(num) {
        let number = num.toString();
        let isPalidrome = true;
        for (let i = 0; i < Math.trunc(number.length / 2); i++) {
            if (number[i] != number[number.length - (i + 1)]) {
                isPalidrome = false;
                break;
            }
        }
        return isPalidrome;
    }

    for (let i = 0; i < numberArray.length; i++) {
        let isTrue = isPalidrome(numberArray[i]);
        console.log(isTrue);
    }
}

palindrome([123, 323323, 12321, 421, 121]);
