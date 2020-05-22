function equalArr(arr1, arr2) {
    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i]);
    }

    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = Number(arr2[i]);
    }

    for (let index in arr1) {
        if (arr1[index] !== arr2[index]) {
            console.log(`Arrays are not identical. Found difference at ${index} index`);
            return;
        } else {
            sum += arr1[index];
        }
    }

    console.log(`Arrays are identical. Sum: ${sum}`);
}

equalArr(["10", "20", "30"], ["10", "20", "30"]);
equalArr(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
