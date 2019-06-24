import React from 'react';
import PropTypes from 'prop-types';

const pluralize = (word, amount) => amount > 1 || amount === 0 ? `${word}s` : word;

const BookListComponent = props => {
  const { queryCollection, currentResults } = props;
  const queryItems = queryCollection[currentResults];
  const collection = queryItems ? queryItems.collection : [];

  return (
    <div className="row">
      <p>
        {`Displaying ${collection.length} ${pluralize('result', collection.length)} `}
        {collection.length ? `for '${queryItems.originalQuery}'` : '... Enter a search to begin your Booktastic Adventure!'}
      </p>
      {!!collection.length && (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author(s)</th>
              <th>Description</th>
              <th>Cover</th>
            </tr>
          </thead>
          <tbody>
            {collection.map(book => (
              <tr>
                <td>{book.title}</td>
                <td>{book.authors}</td>
                <td>{book.description}</td>
                <td><img src={`${book.imageLinks.smallThumbnail}`} alt={book.title} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
};

export default BookListComponent;
