function reverse(arr) {
    let result = "";

    for (let i = arr.length - 1; i >= 0; i--) {
        result += arr[i] + " ";
    }
    console.log(result);
}

reverse(["a", "b", "c", "d", "e"]);
