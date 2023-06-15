import React, { useState, useEffect } from 'react';

import './ShowAlert.css';

import Alert from 'react-bootstrap/esm/Alert';

const ShowAlert = (props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(props.show);

    const showAlertTimeout = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => {
      clearTimeout(showAlertTimeout);
    }
  }, [props]);


  return (
    show && <Alert className="show-alert" variant={props.variant}>
      {props.children && <span>{props.children}</span>}
    </Alert>
  );
}

export default ShowAlert;