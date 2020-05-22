function arrayManipulations(array = []) {
    let arrayNumbers = array.shift().split(" ");

    let add = array
        .shift()
        .split(" ")
        .pop();

    let remove = array
        .shift()
        .split(" ")
        .pop();

    let removeAt = array
        .shift()
        .split(" ")
        .pop();

    let insert = array.shift().split(" ");
    insert.shift();

    //add
    arrayNumbers.push(add);

    //remove
    arrayNumbers = arrayNumbers.filter((x) => x != 2);

    //removeAt
    arrayNumbers.splice(removeAt, 1);

    //insert
    arrayNumbers.splice(insert[1], 0, insert[0]);

    console.log(arrayNumbers.join(" "));
}

arrayManipulations(["4 19 2 53 6 43", "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3"]);
