function solve(text) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+/g;

    let result = [];

    while ((validname = pattern.exec(text)) !== null) {
        result.push(validname);
    }

    console.log(result.join(" "));
}

solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");
