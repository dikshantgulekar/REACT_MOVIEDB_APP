import React, { useState } from "react";
import Header from "../Header/Header";
import useFetchapi from "../customHooks/useFetchapi";
import Showresult from "../result/Showresult";

export default function Upcoming() {
  const [currentPage, setCurrentPage] = useState(1);
  const moviePerPage = 4;

  var Api_key = process.env.REACT_APP_API_KEY;
  var apiPath = `https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1`;

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
        heading="UPCOMING MOVIES"
        moviesPerPage={moviePerPage}
        totalMovies={movies.length}
        paginate={paginate}
      />
    </>
  );
}
