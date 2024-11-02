import NAvbar from "./componant/navbar";
import MoviesCardCollection from "./componant/moviesCardCollection";
import Details from "./componant/details";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [movie, setMovie] = useState([])
  const [pageCount, setpageCount] = useState(0)
  //get all element
  const getElements = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=867f075a913f80bd983abd092b731f76')
    const data = await response.json()
    const result = data.results
    setMovie(result)
    setpageCount(data.total_pages)

  }

  useEffect(() => {
    getElements()
  }, [])

  // get pages
  const getPages = async (page) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=867f075a913f80bd983abd092b731f76&page=${page}`)
    const data = await response.json()
    const result = data.results
    setMovie(result)
    setpageCount(data.total_pages)

  }




  //filter search
  // const FilterBySearch = (word) => {
  //   if (word !== '') {
  //     const newArry = movie.filter((item) => item.title === word)
  //     setMovie(newArry)
  //   } else if(word===''){
  //     getElements()
  //   }
  // }

  //filter by search
  const FilterBySearch = async (word) => {
    if (word !== '') {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=867f075a913f80bd983abd092b731f76&query=${word}&include_adult=false&language=en-US&page=1`)
      const dataSearch = await response.json()
      setMovie(dataSearch.results)
      setpageCount(dataSearch.total_pages)
    } else if (word === '') {
      getElements()
    }

  }


  return (
    <div >
      <NAvbar FilterBySearch={FilterBySearch} />
      <div className="container">
        <BrowserRouter>

          <Routes>
            {/* <div className="container-fluid"> */}
            <Route path="/" element={<MoviesCardCollection movie={movie} getPages={getPages} pageCount={pageCount} />} />
            <Route path="/movie/:id" element={<Details />} />
            {/* </div> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
