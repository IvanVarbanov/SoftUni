function cardGame(array = []) {
    let playersList = new Object();

    for (const line of array) {
        let [name, cards] = line.split(": ");
        cards = cards.split(", ");

        if (playersList.hasOwnProperty(name)) {
            for (const card of cards) {
                playersList[name].add(card);
            }
        } else {
            playersList[name] = new Set();
            for (const card of cards) {
                playersList[name].add(card);
            }
        }
    }

    function deckVolue(cards = new Set()) {
        let totalSum = 0;
        for (const card of cards) {
            let [power, type] = [0, 0];
            let powerSum = 0;
            let typeSum = 0;

            if (card.length <= 2) {
                [power, type] = card.split("");
            } else {
                [power, type] = [card[0] + card[1], card[2]];
            }

            switch (power) {
                case "J":
                    powerSum = 11;
                    break;
                case "Q":
                    powerSum = 12;
                    break;
                case "K":
                    powerSum = 13;
                    break;
                case "A":
                    powerSum = 14;
                    break;
                default:
                    powerSum = Number(power);
                    break;
            }

            switch (type) {
                case "S":
                    typeSum = 4;
                    break;
                case "H":
                    typeSum = 3;
                    break;
                case "D":
                    typeSum = 2;
                    break;
                case "C":
                    typeSum = 1;
                    break;
            }

            totalSum += powerSum * typeSum;
        }
        return totalSum;
    }

    for (const player in playersList) {
        console.log(`${player}: ${deckVolue(playersList[player])}`);
    }
}

cardGame([
    "Peter: 2C, 4H, 9H, AS, QS",
    "Tomas: 3H, 10S, JC, KD, 5S, 10S",
    "Andrea: QH, QC, QS, QD",
    "Tomas: 6H, 7S, KC, KD, 5S, 10C",
    "Andrea: QH, QC, JS, JD, JC",
    "Peter: JD, JD, JD, JD, JD, JD",
]);
