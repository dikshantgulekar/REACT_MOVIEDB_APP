import React, { useState } from "react";
import Header from "../Header/Header";
import Showresult from "../result/Showresult";
import useFetchapi from "../customHooks/useFetchapi";

export default function Toprated() {
  const [currentPage, setCurrentPage] = useState(1);
  const moviePerPage = 4;

  var Api_key = process.env.REACT_APP_API_KEY;
  var apiPath = `https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}&language=en-US&page=1`;

  var movies = useFetchapi(apiPath);

  const indexOfLastMovie = currentPage * moviePerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviePerPage;

  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <Header />

      <Showresult
        movieData={currentMovies}
        heading="TOP-RATED MOVIES"
        moviesPerPage={moviePerPage}
        totalMovies={movies.length}
        paginate={paginate}
      />
    </>
  );
}
