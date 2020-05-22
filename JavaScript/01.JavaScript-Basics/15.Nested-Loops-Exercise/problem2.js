function solve(input) {
    let number = input.shift();

    let numberLength = number.length;

    for (let i = numberLength; i > 0; i--) {
        let char = Number(number.charAt(i - 1));
        //console.log(char);

        if (char === 0) {
            console.log("ZERO");
            continue; //Бех го забраил :)
        }

        let result = "";

        for (j = 1; j <= char; j++) {
            result += String.fromCharCode(char + 33);
        }

        console.log(result);
    }
}

solve(["2049"]);
console.log("----------------------------------------");
solve(["9347439"]);
console.log("----------------------------------------");
solve(["123456789"]);
