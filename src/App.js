
import './App.css';
import React, {useState, useEffect} from "react"
import axios from "axios"
import Header from "./components/Header"
import MovieScreen from './components/MovieScreen'
import Watchlist from './components/Watchlist'

//variable addMovie with movie as parameter
//use setList to create copy of list and add movie passed in to the list
function App() {
  const [list, setList] = useState([])
  const [movieList, setMovieList] = useState([])
  const [page, setPage] = useState(1)

  //functions addMovie and removeMovie that take in movie as a parameter
  //create variable called newState and set equal to list.filter 
  //passing callback to the filter method
const addMovie = (movie) => setList([...list, movie])
const removeMovie = (movie) => {
  const newState = list.filter((mov) => {
    return mov !== movie
  })
//call setList passing in newState
  setList(newState)
}
const getData = () => {
  axios.get( `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_AOI_KEY}&language=en-US&page=${page}`)
  .then((res) => {
    console.log(res.data.results)
    setMovieList(res.data.results)
  })
}
useEffect(() => {
  getData()
}, [page])


//return div with class name app
//header with main tags
//pass props into movie screen 
//add watchlist under movieScreen and pass list as prop
return (
  <div className='App'>
    <Header/>
    <main>
      <MovieScreen addMovie={addMovie}
      movieList={movieList}
      page={page}
      setPage={setPage}
      list={list}
      removeMovie={removeMovie} />
      <Watchlist list={list} removeMovie={removeMovie} />
    </main>
  </div>

)
} 

export default App;
