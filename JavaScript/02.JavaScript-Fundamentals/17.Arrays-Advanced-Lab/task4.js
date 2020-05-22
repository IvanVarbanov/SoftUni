function solve(n, k) {
    let result = [1];

    for (let i = 0; i < n - 1; i++) {
        let sum = 0;

        let arrayForSum = result.slice(i - k, i);

        for (let num of result) {
            sum += num;
        }

        result.push(sum);
    }

    console.log(result);
}

solve(6, 3);
