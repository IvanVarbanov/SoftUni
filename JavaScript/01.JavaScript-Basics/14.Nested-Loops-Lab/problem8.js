function solve(input) {
    let filmname = input.shift();
    let maxTickets = +input.shift();
    let ticketKind = input.shift();

    let totalTickets = 0;
    let full = 0;

    let student = 0;
    let standard = 0;
    let kid = 0;

    while (filmname != "Finish") {
        for (let i = 1; i <= maxTickets && ticketKind != "End"; i++) {
            totalTickets++;
            full++;

            switch (ticketKind) {
                case "student":
                    student++;
                    break;
                case "standard":
                    standard++;
                    break;
                case "kid":
                    kid++;
                    break;
            }

            if (i < maxTickets) {
                ticketKind = input.shift();
            }
        }

        let percentageFull = ((full / maxTickets) * 100).toFixed(2);

        console.log(`${filmname} - ${percentageFull}% full.`);

        filmname = input.shift();
        maxTickets = +input.shift();
        ticketKind = input.shift();

        full = 0;
    }

    let percentageStudent = ((student / totalTickets) * 100).toFixed(2);
    let percentageStandard = ((standard / totalTickets) * 100).toFixed(2);
    let percentageKid = ((kid / totalTickets) * 100).toFixed(2);

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${percentageStudent}% student tickets.`);
    console.log(`${percentageStandard}% standard tickets.`);
    console.log(`${percentageKid}% kids tickets.`);
}

solve([
    "Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"
]);

console.log();

solve([
    "The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"
]);
