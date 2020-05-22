function moviesList(movies = []) {
    let moviesList = [];

    class Movie {
        constructor(name) {
            this.name = name;
        }
    }

    for (const movie of movies) {
        if (movie.includes("addMovie")) {
            let movieData = movie.split("addMovie ");
            moviesList.push(new Movie(movieData[1]));
        } else if (movie.includes("directedBy")) {
            let movieData = movie.split(" directedBy ");
            for (const movie of moviesList) {
                if (movie.name == movieData[0]) {
                    movie.director = movieData[1];
                }
            }
        } else if (movie.includes("onDate")) {
            let movieData = movie.split(" onDate ");
            for (const movie of moviesList) {
                if (movie.name == movieData[0]) {
                    movie.date = movieData[1];
                }
            }
            //console.log(movieData);
        }
    }

    for (const movie of moviesList) {
        if (movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}

moviesList([
    "addMovie Fast and Furious",
    "addMovie ivnacho i mariika",
    "addMovie Godfather",
    "Inception directedBy Christopher Nolan",
    "Godfather directedBy Francis Ford Coppola",
    "Godfather onDate 29.07.2018",
    "Fast and Furious onDate 30.07.2018",
    "Batman onDate 01.08.2018",
    "Fast and Furious directedBy Rob Cohen",
]);
