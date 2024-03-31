function solve(input) {
    movieData = []

    for (const line of input){
        const command = 'addMovie'

        if (line.includes('addMovie')){
            const command = 'addMovie'
            const movieName = line.substring(command.length + 1)
            const movie = {
                name : movieName, 
            }
            movieData.push(movie)

        } else if (line.includes('directedBy')){
            const command = 'directedBy'
            const [movieName, director] = line.split(` ${command} `)
            const movie = movieData.find(movie => movie.name === movieName)

            if (movie) {
                movie.director = director
            }
            
        }else if (line.includes('onDate')){
            const command = 'onDate'
            const [movieName, date] = line.split(` ${command} `)
            const movie = movieData.find(movie => movie.name === movieName)
            if (movie){
                movie.date = date
            }
        }
    }
    movieData
        .filter(movie => movie.director && movie.date)    
        .forEach(movie => console.log(JSON.stringify(movie)))
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])