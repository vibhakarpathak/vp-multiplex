import React, { useContext, useState, useEffect } from 'react';

import Card from 'react-bootstrap/esm/Card';

import './MovieCard.css';

import { POSTER_BASE_URL } from '../../Constants/MovieAPI/MovieAPIConstants';
import { UserContext } from '../../Contexts/User/UserContext';
import Alert from 'react-bootstrap/esm/Alert';

const MovieCard = (props) => {
  const [movies, dispatch] = useContext(UserContext);
  const [showAlert, setShowAlert] = useState(false);

  const handleFavourite = (event) => {
    event.preventDefault();
    setShowAlert(true);
    dispatch({ type: props.movie.isFavourite ? 'DELETE' : 'ADD', payload: [props.movie] });
  }

  useEffect(() => {
    const showAlertTimeout = setTimeout(() => {
      setShowAlert(false);
    }, 2000);

    return () => {
      clearTimeout(showAlertTimeout);
    }
  }, [showAlert]);

  return (
    <>
      <div className="col-md-4 col-lg-3 col-12 mb-3">
        <Card>
          {showAlert && <Alert className="show-alert" variant="success">
            Favourite {props.movie.isFavourite ? 'marked' : 'unmarked'} successfully!
          </Alert>}
          <div className="poster-img">
            <i className="fa fa-play-circle" aria-hidden="true"></i>
            <Card.Img variant="top" src={`${POSTER_BASE_URL}/${props.movie.poster_path}`} />
          </div>
          <Card.Body>
            <Card.Title className="mb-1" title={props.movie.title}>{props.movie.title}</Card.Title>
            <Card.Text>{props.movie.release_date}</Card.Text>
            <div className="fav-button">
              <i className={props.movie.isFavourite ? "fa fa-heart" : "fa fa-heart-o"}
                aria-hidden="true"
                title={`${props.movie.isFavourite ? "Unmark" : "Mark"} favourite`}
                onClick={handleFavourite}></i>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default MovieCard;