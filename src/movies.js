/* const movies = [
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9.3
  },
  {
    title: 'The Godfather',
    year: 1972,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    score: 9.2
  },
]
*/

const movies = require("./data");


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

/*
function getAllDirectors(el) {
return el.director
}
let directorList = movies.map(getAllDirectors)
console.log(directorList)
*/

function getAllDirectors(movies) {
return movies.map((movies) => movies.director)
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(movies) {

const StevenDrama = movies.filter(el => ((el.director==="Steven Spielberg" && el.genre.includes("Drama") )))
return StevenDrama.length

}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

if (movies.length == 0) return 0;

//if (movies.score != Number) return 0;

const average = movies.filter(el => el.score)
.reduce((sum,ell) => sum += ell.score, 0);
 

return Math.round((average/movies.length) * 100 + Number.EPSILON ) / 100


}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {

  const filterMovies = movies.filter(el => (el.genre.includes("Drama")))

  if (filterMovies.length === 0) return 0;

  const Drama =  filterMovies.reduce((sum, arrayfilter ) => sum += arrayfilter.score, 0) / filterMovies.length;

  return Math.round(Drama * 100 + Number.EPSILON ) / 100


}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

let array = []

const sortedByYear = movies.sort (( num1 , num2) => num1.year > num2.year && 1 || -1 )

sortedByYear.forEach(element => array.push(element))

return array
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

const cloneMovies = [...movies]

const filtered = cloneMovies.sort((a, b) => a.title.localeCompare(b.title))

const myString = filtered.slice(0,20) 


return myString


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
