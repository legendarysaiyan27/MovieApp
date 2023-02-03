import React from 'react'

//desturcture removeMovie
//create variavble inWatchList and set equal to list.filter
//check if current movie id is inside of list
const MovieCard = ({ movie, addMovie, removeMovie, list }) => {
    const inWatchlist = list.filter((mov) => {
      return mov.id === movie.id;
    });
    //button variable set equal to a ternery to check if lenght of inWatchList equals zero
    //for true render Add Movie Button
    //for false render Remove button with onclick events 
    //pass movie as an argument
    const button = inWatchlist.length === 0 ? (
        <button onClick={() => addMovie(movie)}>Add to List</button>
    ) : (
      <button onClick={() => removeMovie(movie)}>Remove</button>
    );


//return div with a class name of movie-card
//create div in div and add img tag
//h3 tag with movie original title
//add button tag with contents Add to List
return (
    <div className='movie-card'>
        <div>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
            <h3>{movie.orgiginal_title}</h3>
        </div>
        {button}

    </div>
)
}

export default MovieCard