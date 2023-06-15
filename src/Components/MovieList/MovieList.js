import React from 'react';

import MovieCard from '../MovieCard/MovieCard';

const MovieList = (props) => {
  return (
    <>
      <section id="movie-list-container">
        <div className="container py-md-5 py-3">
          <div className="row d-flex align-item-center">
            {props.movies.map((movie, index) => {
              return (
                <MovieCard key={index} movie={movie} />
              )
            })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default MovieList;