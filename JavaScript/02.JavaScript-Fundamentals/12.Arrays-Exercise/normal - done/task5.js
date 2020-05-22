function maxNumber(arr = []) {
    let topNumArr = [];
    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i];

        let isTop = true;

        for (let j = i + 1; j < arr.length; j++) {
            if (currNum <= arr[j]) {
                isTop = false;
                break;
            }
        }

        if (isTop) {
            topNumArr.push(currNum);
        }
    }

    console.log(topNumArr.join(" "));
}

maxNumber([1, 4, 3, 2]);
maxNumber([41, 41, 34, 20]);
