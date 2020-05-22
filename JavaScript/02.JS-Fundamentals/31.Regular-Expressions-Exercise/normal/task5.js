function netherRealms(input) {
    let demonstArr = input.shift().split(", ");

    let demonsInfo = [];

    for (const demon of demonstArr) {
        let patternForName = /[ \,]/g;
        if (demon.length > 0 && patternForName.exec(demon) === null) {
            let health = demonHealth(demon);
            let demage = demonDemage(demon);
            let demonInfo = `${demon} - ${health} health, ${demage} damage`;

            demonsInfo.push(demonInfo);
        }
    }

    demonsInfo.sort((a, b) => a.localeCompare(b));

    for (const demon of demonsInfo) {
        console.log(demon);
    }

    function demonDemage(demon) {
        let patternForNumbers = /[^.](?<n>[+-]?\d+(\.\d+)?)/g;
        let patternForAlters = /[\*\/]/g;

        let demage = 0;

        let numbers = [];

        while ((valid = patternForNumbers.exec(demon)) !== null) {
            numbers.push(valid.groups["n"]);
        }

        // let numbers = demon.match(patternForNumbers);

        numbers !== null ? (demage = numbers.map(Number).reduce((a, c) => (a += c), 0)) : (demage = 0);

        let alters = demon.match(patternForAlters);

        if (alters !== null) {
            demage = alters.reduce((a, c) => {
                c == "*" ? (a *= 2) : (a /= 2);
                return a;
            }, demage);
        }

        return demage.toFixed(2);
    }

    function demonHealth(demon) {
        let pattern = /[^0-9\+\-\*\/\.]/g;
        let asciiSymbols = demon.match(pattern);

        let asciiSum = 0;
        for (let symbol of asciiSymbols) {
            symbol = symbol.charCodeAt(0);
            asciiSum += symbol;
        }

        return asciiSum;
    }
}

netherRealms(["M3ph-0.5s-0.5t0.0**"]);
console.log();
netherRealms(["M3ph1st0**, Azazel"]);
console.log();
netherRealms(["Gos/ho"]);
