import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function Details() {
  const params = useParams()
  console.log(params.id)
  const [details, setDetails] = useState([])


  //get all details
  const getDetails = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=867f075a913f80bd983abd092b731f76`)
    const data = await response.json()
    setDetails(data)
    console.log(data)

  }

  useEffect(() => {
    getDetails()
  })
  return (
    <div className='container justify-content-center align-items-center'>
      <h1 className='text-center m-5'>{details.title} Details</h1><br />
      <div className='movieCardDetails row container m-5 p-3'>
        <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt={details.title} className='col-md-3 col-12 h-100 m-1' />
        <div className='cardDetsilsContent col-md-8 col-12 p-4'>
          <h3>
            Movie Name:{details.title}
          </h3>
          <h6 className='col-12 m-3'>Release Date: {details.release_date}</h6>
          <h6 className='col-12 m-3'>Ratings: {details.vote_average} </h6>
          <h6 className='col-12 m-3'>Movie story:<br /></h6>
          <p className='mx-4 col-12'>{details.overview}</p>
          <a href={details.homepage} className='col-md-3 col-10 btn btn-secondary mx-5 my-3'>

            Watch Now
          </a>
          <Link to='/'>
            <button className='btn btn-outline-secondary col-md-3 col-10 mx-5 my-3'>Back</button>
          </Link>
        </div>
      </div>
  


    </div>
  )
}

export default Details