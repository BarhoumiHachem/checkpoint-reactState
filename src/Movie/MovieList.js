import React from 'react'
import MovieCard from './MovieCard'
import "./Movie.css"

const MovieList = ({list}) => {
  return (
    <div className='movielist'>
        {list.length? list.map(mov=> <MovieCard mov={mov}/>):<h2>Movie Not Found</h2> }
    </div>
  )
}

export default MovieList