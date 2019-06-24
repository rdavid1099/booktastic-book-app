import React from "react";
import PropTypes from "prop-types";

import BookListComponent from './BookListComponent';
import QueryComponent from './QueryComponent';

const BookSearchListComponent = props => (
  <div className="container" id="book-search-list-component">
    <QueryComponent
      {...props}
    />

    <BookListComponent
      {...props}
    />
  </div>
);

export default BookSearchListComponent;
