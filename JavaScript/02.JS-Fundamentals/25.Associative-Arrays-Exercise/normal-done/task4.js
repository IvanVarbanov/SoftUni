function party(array = []) {
    let partyList = new Set();
    let partyVIPList = new Set();

    let party = false;

    for (const people of array) {
        if (people === "PARTY") {
            party = true;
        }

        if (party) {
            if (people[0].charCodeAt(0) > 58 || people[0].charCodeAt(0) < 47) {
                partyList.delete(people);
            } else {
                partyVIPList.delete(people);
            }
        } else {
            if (people[0].charCodeAt(0) > 58 || people[0].charCodeAt(0) < 47) {
                partyList.add(people);
            } else {
                partyVIPList.add(people);
            }
        }
    }

    let output = Array.from(partyVIPList).concat(Array.from(partyList));

    console.log(output.length);
    output.forEach((a) => console.log(a));
}

party(["0IK9Yo0h", "9NoBUajQ", "Ce8vwPmE", "SVQXQCbc", "tSzE5t0p", "PARTY", "9NoBUajQ", "Ce8vwPmE", "SVQXQCbc"]);
party([
    "m8rfQBvl",
    "fc1oZCE0",
    "UgffRkOn",
    "7ugX7bm0",
    "9CQBGUeJ",
    "2FQZT3uC",
    "dziNz78I",
    "mdSGyQCJ",
    "LjcVpmDL",
    "fPXNHpm1",
    "HTTbwRmM",
    "B5yTkMQi",
    "8N0FThqG",
    "xys2FYzn",
    "MDzcM9ZK",
    "PARTY",
    "2FQZT3uC",
    "dziNz78I",
    "mdSGyQCJ",
    "LjcVpmDL",
    "fPXNHpm1",
    "HTTbwRmM",
    "B5yTkMQi",
    "8N0FThqG",
    "m8rfQBvl",
    "fc1oZCE0",
    "UgffRkOn",
    "7ugX7bm0",
    "9CQBGUeJ",
]);
