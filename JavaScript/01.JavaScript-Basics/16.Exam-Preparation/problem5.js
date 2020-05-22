function solve(input) {
    let numFilms = +input.shift();

    let nameHighest = "";
    let ratingHighest = 0;

    let nameLowest = "";
    let ratingLowest = 0;

    let sumRating = 0;

    for (let i = 0; i < numFilms; i++) {
        let filmName = input.shift();
        let filmRating = +input.shift();

        if (filmRating > ratingHighest || i == 0) {
            nameHighest = filmName;
            ratingHighest = filmRating;
        }

        if (filmRating < ratingHighest || i == 0) {
            nameLowest = filmName;
            ratingLowest = filmRating;
        }

        sumRating += filmRating;
    }

    let averageRating = (sumRating / numFilms).toFixed(1);

    console.log(`${nameHighest} is with highest rating: ${ratingHighest}`);
    console.log(`${nameLowest} is with lowest rating: ${ratingLowest}`);
    console.log(`Average rating: ${averageRating}`);
}

solve(["5", "A Star is Born", "7.8", "Creed 2", "7.3", "Mary Poppins", "7.2", "Vice", "7.2", "Captain Marvel", "7.1"]);
console.log();
solve(["3", "Interstellar", "8.5", "Dangal", "8.3", "Green Book", "8.2"]);
