import React from "react"
import MovieCard from "./MovieCard"

//Create decrement and increment functions
//setPage to page +-1 according to the function that belongs to
const MovieScreen = ({addMovie, movieList, page, setPage, list, removeMovie}) => {
    const decrement = () => setPage(page -1)
    const increment = () => setPage(page +1)
//TODO create variable movieDisplay
//set equal to movieList map
//return MovieCard component
//pass movie as prop
const movieDisplay = movieList.map( (movie, index) => {
   // return <h2>{original_title}</h2>
   return <MovieCard 
   addMovie={addMovie} 
   movie={movie} 
   list={list} 
   removeMovie={removeMovie}/>
}
);
//return a div with a classname of page
//h1 tags with name of theater
//h3 tag add a movie to watchlist
//div with classname movie container referencing {movieDisplay}
//Attach functions to corresponding buttons through onClick

//Create div in between the h3 tag and the movie-container div
//give this div classname btn-container
//create previous and next buttons
return (
    <div className='page'>
        <h1>Braden's Movie Theater</h1>
        <h3>Add a movie to the Watchlist!</h3>
        <div className="btn-container">
            <button onClick={page !== 1 && decrement}>Previous</button>
            <button onClick={increment}>Next</button></div>
            <div className="movie-container"> {movieDisplay}</div>

    </div>
)
}

export default MovieScreen