function solve(input) {
    let bookNeeded = input.shift();
    let number = +input.shift();

    let counter = 1;

    while (counter <= number) {
        let books = input.shift();

        if (bookNeeded == books) {
            console.log(`You checked ${counter} books and found it.`);
            break;
        } else if (counter == number) {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${counter} books.`);
        }

        counter++;
    }
}

solve(["Troy", "8", "Stronger", "Life Style", "Troy"]);
console.log();
solve(["The Spot", "4", "Hunger Games", "Harry Potter", "Torronto", "Spotify"]);
console.log();
solve([
    "Bourne",
    "32",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"
]);
