import React from 'react'
import MoviesCard from './moviesCard'
import MoviesPagination from './pagination'

function MoviesCardCollection({movie,getPages,pageCount}) {
  return (
    <div className='row justify-content-evenly p-5'>
        
       {
        movie.length>=1?(movie.map((mov)=>{
         return( <MoviesCard key={mov.id} mov={mov} />)
        })):<h3>There aren't any movies</h3>
       }
       <MoviesPagination getPages={getPages}  />
        
    </div>
  )
}

export default MoviesCardCollection