import React from 'react';
import { shallow } from 'enzyme';
import QueryComponent from '../components/bookSearchListComponent/QueryComponent';

it('prompts users to search', () => {
  const queryComponent = shallow(<QueryComponent />);
  const label = <label for="book-query">Search Google's Book Catalog</label>;
  const input = <input type="text" class="form-control" id="book-query" placeholder='Search by Title or Author' style={{width: '35%'}} />;
  const button = <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>;
  expect(queryComponent.contains(label)).toEqual(true);
  expect(queryComponent.contains(input)).toEqual(true);
  expect(queryComponent.contains(button)).toEqual(true);
});
