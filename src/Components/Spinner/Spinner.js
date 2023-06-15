import React from 'react';

import './Spinner.css';

const Spinner = ({ children, ...rest }) => {
  return (
    <div className="spinner-container" {...rest}>
      <div className="spinner-icon" role="img" aria-label="A spinning flag">
        Please wait
      </div>
      {children && <p>{children}</p>}
    </div>
  );
}

export default Spinner;