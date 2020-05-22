function solve(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    };

    let personJSON = JSON.stringify(person);

    console.log(personJSON);
}

solve("George", "Jones", "Brown");
