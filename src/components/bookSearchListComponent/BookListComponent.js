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
        {collection.length ? `of ${queryItems.totalItems} for '${queryItems.originalQuery}'` : '... Enter a search to begin your Booktastic Adventure!'}
      </p>
      {!!collection.length && (
        <table>
          <thead>
            <tr>
              <th>Cover</th>
              <th>Title</th>
              <th>Author(s)</th>
              <th>Description</th>
              <th>Publisher</th>
            </tr>
          </thead>
          <tbody>
            {collection.map((book, key) => (
              <tr key={key} className="book-result" onClick={() => props.routeTo(book.infoLink)}>
                <td>{(book.imageLinks && book.imageLinks.smallThumbnail) ?
                  <img src={`${book.imageLinks.smallThumbnail}`} alt={book.title} /> :
                  'No Image'
                }
                </td>
                <td>{book.title}</td>
                <td>{book.authors ? book.authors.join(', ') : 'N/A'}</td>
                <td>{book.description ? book.description : 'No description provided.'}</td>
                <td>{book.publisher ? book.publisher : 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
};

export default BookListComponent;
