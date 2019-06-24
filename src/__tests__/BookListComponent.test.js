import React from 'react';
import { shallow } from 'enzyme';
import BookListComponent from '../components/bookSearchListComponent/BookListComponent';

it('prompts users to search if query collection is empty', () => {
  const bookListComponent = shallow(<BookListComponent queryCollection={[]} />);
  const cta = <p>Displaying 0 results ... Enter a search to begin your Booktastic Adventure!</p>;
  expect(bookListComponent.contains(cta)).toEqual(true);
});

it('displays query count and query if query has been submitted', () => {
  const bookListComponent = shallow(<BookListComponent
    queryCollection={{stuff: {
      totalItems: 1,
      collection: [{
        title: 'stuff',
        imageLinks: {smallThumbnail: ''},
      }],
      originalQuery: 'STUFF'
    }}}
    currentResults='stuff'
  />);
  const cta = <p>Displaying 1 result of 1 for 'STUFF'</p>;
  expect(bookListComponent.contains(cta)).toEqual(true);
});
