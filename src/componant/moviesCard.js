import React from 'react'
import { Link } from 'react-router-dom';
function MoviesCard({ mov }) {

    return (

        <div div className='cardContainer overflow-hidden my-2  position-relative col-md-4 col-12' >
            <Link to={`/movie/${mov.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`} alt='img' />
                <div className='cardContent position-absolute row text-center  align-content-center'>
                    <h4 className='col-12 m-3'>Movie Name:<br /> {mov.title}</h4>
                    <h6 className='col-12 m-3'>Release Date: {mov.release_date}</h6>
                    <h6 className='col-12 m-3'>Ratings: {mov.vote_average} </h6>
                </div>
            </Link>
        </div >

    )
}

export default MoviesCard;