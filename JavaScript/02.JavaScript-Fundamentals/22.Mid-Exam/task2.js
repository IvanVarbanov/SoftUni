function weaponsmith(array = []) {
    let weaponNameArr = array.shift().split("|");
    //console.log(weaponNameArr);

    for (const line of array) {
        let commandArr = line.split(" ");
        //console.log(commandArr);

        switch (commandArr[0]) {
            case "Move":
                if (commandArr[1] == "Right") {
                    moveRight(weaponNameArr, commandArr[2]);
                } else if (commandArr[1] == "Left") {
                    moveLeft(weaponNameArr, commandArr[2]);
                }
                break;
            case "Check":
                if (commandArr[1] == "Even") {
                    checkEven(weaponNameArr);
                } else if (commandArr[1] == "Odd") {
                    checkOdd(weaponNameArr);
                }
                break;
            case "Done":
                console.log(`You crafted ${weaponNameArr.join("")}!`);
        }
    }

    function moveLeft(array = [], index) {
        if (index > 0 && index < array.length) {
            let element = array.splice(index, 1);
            array.splice(index - 1, 0, element[0]);
        }
    }

    function moveRight(array = [], index) {
        if (index < array.length) {
            let element = array.splice(index, 1);
            array.splice(index + 1, 0, element[0]);
        }
    }

    function checkEven(array = []) {
        let output = [];
        for (let i = 0; i < array.length; i++) {
            if (i % 2 == 0) {
                output.push(array[i]);
            }
        }
        console.log(output.join(" "));
    }

    function checkOdd(array = []) {
        let output = [];
        for (let i = 0; i < array.length; i++) {
            if (i % 2 != 0) {
                output.push(array[i]);
            }
        }
        console.log(output.join(" "));
    }
}

// weaponsmith([
//     "ha|Do|mm|om|er",
//     "Move Right 0",
//     "Move Left 3",
//     "Check Odd",
//     "Move Left 2",
//     "Move Left 10",
//     "Move Left 0",
//     "Done",
// ]);

weaponsmith(["ri|As|er|hb|ng", "Move Left 1", "Move Right 2", "Move Right 3", "Move Left 2", "Done"]);
