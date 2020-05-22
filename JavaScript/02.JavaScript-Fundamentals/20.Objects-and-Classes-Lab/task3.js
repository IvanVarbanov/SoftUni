function solve(JSONdata) {
    let person = JSON.parse(JSONdata);

    for (let key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');
