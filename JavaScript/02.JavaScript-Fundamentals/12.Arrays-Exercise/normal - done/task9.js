function solve(data = []) {
    let health = 100;
    let coins = 0;
    let bestRoom = 0;

    let dataSplit = data[0].split("|");
    //console.log(dataSplit);

    for (const line of dataSplit) {
        let currentElementArray = line.split(" ");

        switch (currentElementArray[0]) {
            case "potion":
                if (health + Number(currentElementArray[1]) > 100) {
                    console.log(`You healed for ${100 - health} hp.`);
                    health = 100;
                } else {
                    health += Number(currentElementArray[1]);
                    console.log(`You healed for ${currentElementArray[1]} hp.`);
                }

                bestRoom++;

                console.log(`Current health: ${health} hp.`);

                break;
            case "chest":
                coins += Number(currentElementArray[1]);
                bestRoom++;
                console.log(`You found ${currentElementArray[1]} coins.`);

                break;
            default:
                health -= Number(currentElementArray[1]);
                if (health > 0) {
                    console.log(`You slayed ${currentElementArray[0]}.`);
                    bestRoom++;
                } else {
                    console.log(`You died! Killed by ${currentElementArray[0]}.`);
                    console.log(`Best room: ${++bestRoom}`);
                    return;
                }
        }
    }

    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}

solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
console.log();
solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
