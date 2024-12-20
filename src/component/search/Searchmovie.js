import React from 'react'
import Header from '../Header/Header'
import { useParams } from 'react-router-dom'
import useFetchapi from '../customHooks/useFetchapi';
import Showresult from '../result/Showresult';

export default function Searchmovie() {
  let {movieName} = useParams();
  const Api_key = process.env.REACT_APP_API_KEY
  const apiPath = `https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${movieName}&page=1`

  const ans = useFetchapi(apiPath, movieName) 
  // console.log(movieName)
  return (
   <>
       <Header/>
       <Showresult movieData={ans} />
   </>
  )
}
