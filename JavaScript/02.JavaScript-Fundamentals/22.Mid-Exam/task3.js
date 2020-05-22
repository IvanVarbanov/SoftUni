function wizard(input = []) {
    let cards = input.shift().split(":");
    let deck = [];

    function add(cards = [], cardToAdd, deck = []) {
        if (cards.includes(cardToAdd)) {
            deck.push(cardToAdd);
        } else {
            console.log("Card not found.");
        }
    }

    function insert(cards = [], cardToInsert, deck = [], index) {
        if (cards.includes(cardToInsert) && index < deck.length && index >= 0) {
            deck.splice(index, 0, cardToInsert);
        } else {
            console.log("Error!");
        }
    }

    function remove(deck = [], cardToRemove) {
        if (deck.includes(cardToRemove)) {
            let cardIndex = deck.indexOf(cardToRemove);
            deck.splice(cardIndex, 1);
        } else {
            console.log("Card not found.");
        }
    }

    function swap(deck = [], cart1, cart2) {
        let cart1Index = deck.indexOf(cart1);
        let cart2Index = deck.indexOf(cart2);
        deck.splice(cart1Index, 1, cart2);
        deck.splice(cart2Index, 1, cart1);
    }

    function shuffle(deck = []) {
        deck = deck.reverse();
    }

    for (const line of input) {
        let command = line.split(" ");

        switch (command[0]) {
            case "Add":
                add(cards, command[1], deck);
                break;
            case "Insert":
                insert(cards, command[1], deck, command[2]);
                break;
            case "Remove":
                remove(deck, command[1]);
                break;
            case "Swap":
                swap(deck, command[1], command[2]);
                break;
            case "Shuffle":
                shuffle(deck);
                break;
            case "Ready":
                console.log(deck.join(" "));
        }
    }
}

wizard([
    "Innervate:Moonfire:Pounce:Claw:Wrath:Bite",
    "Add Moonfire",
    "Add Pounce",
    "Add Bite",
    "Add Wrath",
    "Insert Claw 0",
    "Swap Claw Moonfire",
    "Remove Bite",
    "Shuffle deck",
    "Ready",
]);
