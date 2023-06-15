import React, { useContext, useState, useEffect } from 'react';

import { UserContext } from '../../Contexts/User/UserContext';
import MovieList from '../../Components/MovieList/MovieList';
import Spinner from '../../Components/Spinner/Spinner';
import NoDataFound from '../../Components/NoDataFound/NoDataFound';

export default function Favourite() {
  const [movies, dispatch] = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });

  return (
    <>
      {loading && <Spinner>Loading movies data!</Spinner>}
      {!loading && movies.length === 0 ? <NoDataFound>You don't have any favourite movie!</NoDataFound> : <MovieList movies={movies} />}
    </>
  )
}
