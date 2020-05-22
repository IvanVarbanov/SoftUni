function equalSums(arr = []) {
    let result = "no";
    for (let i = 0; i < arr.length; i++) {
        let sumLeft = 0;
        let sumRight = 0;

        //sum left
        for (let j = 0; j < i; j++) {
            sumLeft += arr[j];
        }

        //sum right
        for (let k = i + 1; k < arr.length; k++) {
            sumRight += arr[k];
        }

        if (sumRight == sumLeft) {
            result = i;
        }
    }

    console.log(result);
}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
