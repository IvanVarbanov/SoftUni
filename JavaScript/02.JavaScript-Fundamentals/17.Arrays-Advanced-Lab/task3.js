function solve(array = []) {
    let kNumbers = array.shift();

    let firstNumbers = array.slice(0, kNumbers);
    let lastNumbers = array.slice(array.length - kNumbers);

    console.log(firstNumbers.join(" "));
    console.log(lastNumbers.join(" "));
}

solve([3, 6, 7, 8, 9]);

console.log();

solve([2, 7, 8, 9]);
