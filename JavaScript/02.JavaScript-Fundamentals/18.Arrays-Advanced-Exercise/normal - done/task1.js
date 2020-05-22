function train(array = []) {
    let trains = array.shift().split(" ");
    let maxCapacity = array.shift();

    for (let i = 0; i < array.length; i++) {
        let comand = array[i].split(" ");

        if (comand[0] == "Add") {
            trains.push(comand[1]);
        } else {
            for (let j = 0; j < trains.length; j++) {
                if (Number(trains[j]) + Number(comand[0]) <= maxCapacity) {
                    trains[j] = Number(trains[j]) + Number(comand[0]);
                    break;
                }
            }
        }
    }

    console.log(trains.join(" "));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
