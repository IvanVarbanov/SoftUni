function race(array = []) {
    let competitors = array
        .shift()
        .split(", ")
        .reduce((acc, curr) => {
            acc[curr] = 0;
            return acc;
        }, {});

    let namePattern = /[A-Za-z]+/gm;
    let disPattern = /\d/gm;

    let racers = array.slice(0, array.indexOf("end of race")).forEach((racer) => {
        let racerName = racer.match(namePattern).join("");
        let distance = racer.match(disPattern).reduce((acc, curr) => (acc += Number(curr)), 0);

        if (competitors.hasOwnProperty(racerName)) {
            competitors[racerName] += distance;
        }
    });

    let output = Object.entries(competitors).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${output[0][0]}`);
    console.log(`2nd place: ${output[1][0]}`);
    console.log(`3rd place: ${output[2][0]}`);
}

race([
    "George, Peter, Bill, Tom",
    "G4e@55or%6g6!68e!!@",
    "R1@!3a$y4456@",
    "B5@i@#123ll",
    "G@e54o$r6ge#",
    "7P%et^#e5346r",
    "T$o553m&6",
    "end of race",
]);
