import React, { useEffect, useState } from 'react';

// import Header from '../../Components/Header/Header';
import Slider from '../../Components/Slider/Slider';
import MovieList from '../../Components/MovieList/MovieList';
import Spinner from '../../Components/Spinner/Spinner';
import NoDataFound from '../../Components/NoDataFound/NoDataFound';

import { getMovies, searchMovie } from '../../Services/MovieService';
import { getFavourites } from '../../Services/UserService';

export default function Home(props) {
  const [movies, addMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = props.match.params.query;
    if (query) {
      searchMovie(query)
        .then(data => {
          setLoading(false);
          addMovies(mapMovieData(data.results));
        })
    } else {
      getMovies()
        .then(data => {
          setLoading(false);
          addMovies(mapMovieData(data.results));
        });
    }
  }, [props]);

  const mapMovieData = (movies) => {
    const favouriteMovieIds = getFavourites().map((movie) => movie.id);
    movies = cleanupMovieData(movies);

    return movies.map((movie) => {
      return {
        ...movie,
        title: movie.title || movie.original_name,
        release_date: movie.release_date || movie.first_air_date,
        isFavourite: favouriteMovieIds.indexOf(movie.id) > -1 ? true : false
      }
    });
  }

  const cleanupMovieData = (movies) => {
    return movies.filter((movie) => movie.poster_path !== undefined
      && movie.poster_path !== null
      && movie.title !== ' ');
  }

  return (
    <>
      <Slider />
      {loading && <Spinner>Loading movies data!</Spinner>}
      {!loading && movies.length === 0 ? <NoDataFound>No movies found!</NoDataFound> : <MovieList movies={movies} />}
    </>
  )
}
