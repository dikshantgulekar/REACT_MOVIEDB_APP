import React from "react";
import Header from "../Header/Header";
import Showresult from "../result/Showresult";
import useFetchapi from "../customHooks/useFetchapi";

export default function Homepage() {
  var Api_key = process.env.REACT_APP_API_KEY;
  var apiPath = `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1`;

  const movies = useFetchapi(apiPath);

  return (
    <>
      <Header />
      <Showresult movieData={movies} heading="POPULAR MOVIE" />
    </>
  );
}
