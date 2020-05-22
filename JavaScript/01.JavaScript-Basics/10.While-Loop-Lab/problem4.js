function solve(input) {
    let broiVnoski = input.shift();
    let vnoska = +input.shift();
    let k = 1;
    let total = 0;

    while (k <= broiVnoski) {
        k++;

        if (vnoska >= 0) {
            total = total + vnoska;
            console.log(`Increase: ${vnoska.toFixed(2)}`);
            vnoska = +input.shift();
        } else {
            console.log("Invalid operation!");
            break;
        }
    }

    console.log(`Total: ${total.toFixed(2)}`);
    //console.log();
}

solve(["3", "5.51", "69.42", "100"]);
solve(["5", "120", "45.55", "-150"]);
