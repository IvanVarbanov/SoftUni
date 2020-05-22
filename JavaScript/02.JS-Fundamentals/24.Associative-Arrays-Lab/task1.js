function phonebook(input = []) {
    let phonebook = new Map();

    for (const entry of input) {
        let [name, number] = entry.split(" ");

        phonebook.set(name, number);
    }

    for (const [name, number] of phonebook) {
        console.log(`${name} -> ${number}`);
    }
}

phonebook(["Tim 0834212554", "Peter 0877547887", "Bill 0896543112", "Tim 0876566344"]);
