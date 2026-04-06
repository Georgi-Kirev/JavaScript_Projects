
function movieInformation(inputString) {

    let movieList = []; // Асоциативен масив !!!

    for (const element of inputString) {
        if (element.startsWith('addMovie')) {
            let nameOfTheMovie = element.substring(9)
            movieList.push({name: nameOfTheMovie}); // Правя го с Асоциативни масиви !!! В демонстрацията е с масиви.
        } else if (element.includes('directedBy')) {
            let [name, directorName] = element.split(' directedBy ')

            let movie = movieList.find(m => m.name === name)
            if (movie) {
                movie.director = directorName;
            }
        } else if (element.includes('onDate')) {
            let [name, dateOfMovieRelice] = element.split(' onDate ')
            
            let movie = movieList.find(m => m.name === name)
            if (movie) {
                movie.date = dateOfMovieRelice;
            }
        }
    }

    for (const key of movieList) {

        if (key.director && key.date) {
            console.log(JSON.stringify(key))
        }
    }
}


movieInformation([
'addMovie Fast and Furious',
'addMovie Godfather',
'Inception directedBy Christopher Nolan',
'Godfather directedBy Francis Ford Coppola',
'Godfather onDate 29.07.2018',
'Fast and Furious onDate 30.07.2018',
'Batman onDate 01.08.2018',
'Fast and Furious directedBy Rob Cohen'
])

movieInformation([
'addMovie The Avengers',
'addMovie Superman',
'The Avengers directedBy Anthony Russo',
'The Avengers onDate 30.07.2010',
'Captain America onDate 30.07.2010',
'Captain America directedBy Joe Russo'
])