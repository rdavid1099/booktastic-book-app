import React from 'react';
import PropTypes from 'prop-types';

const pluralize = (word, amount) => amount > 1 || amount === 0 ? `${word}s` : word;

const BookListComponent = props => (
  <div className="row">
    <p>
      {`Displaying ${props.queryCollection.length} ${pluralize('result', props.queryCollection.length)} `}
      {props.queryCollection.length ? `for '${props.currentQuery}'` : '... Enter a search to begin your Booktastic Adventure!'}
    </p>
  </div>
);

export default BookListComponent;
