function bomb(array = [], bomb = []) {
    let output = array.slice(0);

    while (output.includes(bomb[0])) {
        let bombIndex = output.indexOf(bomb[0]);
        let start = Math.max(bombIndex - bomb[1], 0);

        output.splice(start, bomb[1] * 2 + 1);
    }

    let result = output.reduce((a, b) => {
        a += b;
        return a;
    }, 0);

    console.log(result);
}

bomb([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
console.log();
bomb([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
