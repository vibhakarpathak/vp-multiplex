import React from 'react';

import { getFavourites } from '../../Services/UserService';

const UserContext = React.createContext();

const favouritesReducer = (state, action) => {
  let movies = action.payload;

  switch (action.type) {
    case 'ADD':
      movies.map(movie => movie.isFavourite = true);
      movies = [...state, ...movies];

      localStorage.setItem('favourites', JSON.stringify(movies));
      return movies;
    case 'DELETE':
      movies.map(movie => movie.isFavourite = false);
      movies = state.filter(x => {
        return !movies.some(t => t.id === x.id)
      });

      localStorage.setItem('favourites', JSON.stringify(movies));
      return movies;
    default:
      return state;
  }
}

const UserProvider = (props) => {
  const [movies, dispatch] = React.useReducer(favouritesReducer, []);

  React.useEffect(() => {
    dispatch({ type: 'ADD', payload: getFavourites() });
  }, []);
  return <UserContext.Provider value={[movies, dispatch]} {...props} />;
}

export { UserContext, UserProvider };