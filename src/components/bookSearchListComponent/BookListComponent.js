import React from 'react';
import PropTypes from 'prop-types';

const BookListComponent = props => (
  <div className="row">
    <p>
      {`Displaying ${props.queryCollection.length} Results `}
      {props.queryCollection.length ? `for '${props.currentQuery}'!` : '... Enter a search to begin your Booktastic Adventure!'}
    </p>
  </div>
);

export default BookListComponent;
