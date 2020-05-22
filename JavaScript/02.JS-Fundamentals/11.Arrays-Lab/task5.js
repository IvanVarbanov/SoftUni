function sumEvenNum(arr) {
    let sum = 0;
    let arrNumbs = [];
    for (let i = 0; i < arr.length; i++) {
        arrNumbs[i] = Number(arr[i]);
    }

    for (let nums of arrNumbs) {
        if (nums % 2 === 0) {
            sum += nums;
        }
    }

    console.log(sum);
}

sumEvenNum(["1", "2", "3", "4", "5", "6"]);
