function houseParty(array = []) {
    let guests = [];
    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(" ");
        isInTheList = false;

        for (let j = 0; j < guests.length; j++) {
            if (guests[j] == command[0]) {
                isInTheList = true;
                break;
            }
        }

        if (command.length > 3) {
            //когато няма ходи
            if (!isInTheList) {
                console.log(`${command[0]} is not in the list!`);
            } else {
                guests = guests.filter((x) => x != command[0]);
            }
        } else {
            //когато ще ходи
            if (isInTheList) {
                console.log(`${command[0]} is already in the list!`);
            } else {
                guests.push(command[0]);
            }
        }
    }

    console.log(guests.join("\n"));
}

houseParty([
    "Allie is going!",
    "George is going!",
    "John is not going!",
    "George is not going!"
]);

houseParty([
    "Tom is going!",
    "Annie is going!",
    "Tom is going!",
    "Garry is going!",
    "Jerry is going!"
]);
