function reverse(num, arrNum) {
    let reverseArr = [];
    let result = "";

    for (let i = 0; i < num; i++) {
        reverseArr.push(arrNum[i]);
    }

    for (let i = num - 1; i >= 0; i--) {
        result += reverseArr[i] + " ";
    }
    console.log(result);
}

reverse(3, [10, 20, 30, 40, 50]);
