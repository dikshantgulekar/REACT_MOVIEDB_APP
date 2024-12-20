import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import Homepage from './component/Home/Homepage'
import Upcoming from './component/upcoming/Upcoming'
import Toprated from './component/toprated/Toprated'
import Singlemovie from './component/singlemovie/Singlemovie'
import Searchmovie from './component/search/Searchmovie'
import Pagenotfound from './component/Pagenotfound'


export default function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={ <Homepage/>} />
          <Route path='/upcoming' element={<Upcoming/>}/>
          <Route path='/top-rated' element={<Toprated/>}/>
          <Route path='/single-movie/:movieId' element={<Singlemovie/>}/>
          <Route path='/search-movie/:movieName' element={<Searchmovie/>}/>
          <Route path='*' element={<Pagenotfound/>}/>
      </Routes>

    </>
  )
}
