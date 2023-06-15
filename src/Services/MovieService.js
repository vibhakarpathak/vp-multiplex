import axios from 'axios';

import { API_KEY, API_BASE_URL } from '../Constants/MovieAPI/MovieAPIConstants';

const getMovies = () => {
  const url = `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  return axios.get(url).then(response => response.data)
}

const getMovieById = (movieId) => {
  const url = `${API_BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`
  return axios.get(url).then(response => response.data)
}

const searchMovie = (query) => {
  const url = `${API_BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`
  return axios.get(url).then(response => response.data)
}

export { getMovies, getMovieById, searchMovie };
