function gladiatorInventory(array = []) {
    let inventoryArray = array[0].split(" ");
    let commandsArray = array.splice(1);

    for (const comand of commandsArray) {
        let commandArray = comand.split(" ");

        switch (commandArray[0]) {
            case "Buy":
                if (!inventoryArray.includes(commandArray[1])) {
                    inventoryArray.push(commandArray[1]);
                }
                break;
            case "Trash":
                if (inventoryArray.indexOf(commandArray[1]) >= 0) {
                    inventoryArray.splice(inventoryArray.indexOf(commandArray[1]), 1);
                }
                break;
            case "Repair":
                if (inventoryArray.indexOf(commandArray[1]) >= 0) {
                    inventoryArray.splice(inventoryArray.indexOf(commandArray[1]), 1);
                    inventoryArray.push(commandArray[1]);
                }
                break;
            case "Upgrade":
                let item = commandArray[1].split("-");
                if (inventoryArray.indexOf(item[0]) >= 0) {
                    inventoryArray.splice(inventoryArray.indexOf(item[0]) + 1, 0, `${item[0]}:${item[1]}`);
                }
                break;
        }
    }

    console.log(inventoryArray.join(" "));
    //Ivan e velik
    //* kjoijiojiojiojio
    // REM TODO  fsdsadsada
    //! sapodkaposkdaop
}

gladiatorInventory(["SWORD Shield Spear", "Buy Bag", "Trash Shield", "Repair Spear", "Upgrade SWORD-Steel"]);
console.log();
gladiatorInventory(["SWORD Shield Spear", "Trash Bow", "Repair Shield", "Upgrade Helmet-V"]);
