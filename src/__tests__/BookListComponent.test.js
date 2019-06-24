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
    queryCollection={[{title: 'stuff'}]}
    currentQuery='stuff'
  />);
  const cta = <p>Displaying 1 result for 'stuff'</p>;
  expect(bookListComponent.contains(cta)).toEqual(true);
});
