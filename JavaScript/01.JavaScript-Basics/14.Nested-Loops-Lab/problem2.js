function solve() {
    let result = "";
    for (i = 1; i <= 10; i++) {
        for (j = 1; j <= 10; j++) {
            result += `${i * j} `;
        }
        console.log(result);
        result = "";
    }
}

solve();
