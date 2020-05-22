function condense(arr) {
    let newArr = arr;
    let sum = [];
    while (newArr.length > 1) {
        sum = [];
        for (let i = 0; i < newArr.length - 1; i++) {
            sum.push(newArr[i] + newArr[i + 1]);
        }

        newArr = sum;
    }

    if (arr.length == 1) {
        console.log(`${arr[0]}`);
    } else {
        console.log(sum[0]);
    }
}

condense([1]);
