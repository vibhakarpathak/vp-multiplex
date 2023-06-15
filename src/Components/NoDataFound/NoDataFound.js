import React from 'react';

import './NoDataFound.css';

const NoDataFound = ({ children, ...rest }) => {
  return (
    <div className="no-data-found-container" {...rest}>
      <div>
        <span className="header">
          <i className="fa fa-meh-o" aria-hidden="true">&nbsp;</i>
          Oops!!!
        </span>
      </div>
      {children && <p>{children}</p>}
    </div>
  )
}

export default NoDataFound;