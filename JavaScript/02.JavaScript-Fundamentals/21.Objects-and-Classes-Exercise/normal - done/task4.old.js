function moviesList(movies = []) {
    let movieList = [];

    class Movie {
        constructor(name, director, date) {
            this.name = name;
            this.date = date;
            this.director = director;
        }
    }

    for (let i = 0; i < movies.length; i++) {
        let movieData;
        if (movies[i].includes("addMovie")) {
            movieData = movies[i].split("addMovie ");
            movieData.shift();
            movieList.push(new Movie(movieData[0]));
            movieData = "Done"; // Индикатор че е готово
        } else if (movies[i].includes("directedBy")) {
            movieData = movies[i].split(" directedBy ");
            movieData.unshift("directedBy");

            for (let i = 0; i < movieList.length; i++) {
                if (movieList[i].name == movieData[1]) {
                    movieList[i].director = movieData[2];
                    break;
                }
            }

            movieData = "Done"; // Индикатор че е готово
        } else if (movies[i].includes("onDate")) {
            movieData = movies[i].split(" onDate ");
            movieData.unshift("onDate");

            for (let i = 0; i < movieList.length; i++) {
                if (movieList[i].name == movieData[1]) {
                    movieList[i].date = movieData[2];
                    break;
                }
            }

            //movieData = "Done"; // Индикатор че е готово
        }

        //console.log(movieData);
    }

    // console.log();
    // console.log();
    // console.log("Резултат");

    console.log(JSON.stringify(movieList));
}

moviesList([
    "addMovie Fast and Furious",
    "addMovie Godfather",
    "Inception directedBy Christopher Nolan",
    "Godfather directedBy Francis Ford Coppola",
    "Godfather onDate 29.07.2018",
    "Fast and Furious onDate 30.07.2018",
    "Batman onDate 01.08.2018",
    "Fast and Furious directedBy Rob Cohen",
]);
