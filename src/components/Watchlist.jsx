import React from 'react'
import MovieCard from "./MovieCard"

// destucture props
//create variable movieDisplay
//Map over list, and return a MovieCard for each movie in list
const Watchlist = ({ list, removeMovie }) => {
  const movieDisplay = list.map((movie, index) => {
return (
    <MovieCard 
    movie={movie} 
    removeMovie={removeMovie}
    list={list} />
)
})

//return div with className watchlist
//h1 tag with My Watchlist
//under h1 create a div class name of movie-container
//place {movieDisplay} in the div
return (
    <div className='watchlist'>
        <h1>My Watchlist</h1>
        <div className='movie-container'> {movieDisplay}</div>
    </div>
    
)
}

export default Watchlist