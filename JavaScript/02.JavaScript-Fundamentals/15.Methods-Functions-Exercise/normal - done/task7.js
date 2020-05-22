function matrix(num) {
    for (let i = 0; i < num; i++) {
        let numArray = [];
        for (let j = 0; j < num; j++) {
            numArray.push(num);
        }
        console.log(numArray.join(" "));
    }
}

matrix(3);
console.log();
matrix(7);
