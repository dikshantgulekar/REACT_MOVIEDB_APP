import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import './Bgimg.css'
import { useDispatch } from 'react-redux';
import { shareMovieName } from '../Redux/Slices/movieSlice';

export default function Bgimg() {

  const textData = useRef()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function searchMovie(ev){
    ev.preventDefault();
    const movieName = textData.current.value;
    // console.log(movieName)
    navigate('/search-movie/'+movieName)
    dispatch(shareMovieName(movieName))
  }
  
  return (
    <>
      <div className='img-container'>
          <img
            src='https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/u0BDggs80FG9tyZwxWTzVTDQls0.jpg'
            alt='BACKGROUND IMG'
          />


      <div className='content text-center'>
        <h2>Welcome.</h2>
        <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>

        <div className='search-bar'>
          <form onSubmit={searchMovie}>
              <input
                  type="text"
                  ref={textData}
                  placeholder="Search for a movie, tv show, person..."
                />
                <button type="submit">Search</button>
          </form>
        </div>
      </div>
      </div>
    </>
  )
}
