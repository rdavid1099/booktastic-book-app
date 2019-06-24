import React from 'react';
import { shallow } from 'enzyme';
import QueryComponent from '../components/bookSearchListComponent/QueryComponent';

it('prompts users to search', () => {
  const queryComponent = shallow(<QueryComponent loading={false} currentQuery='' />);
  const label = <label>Search Google's Book Catalog</label>;
  const button = <button className="btn btn-outline-secondary disabled" type="button">Search</button>;
  expect(queryComponent.contains(label)).toEqual(true);
  expect(queryComponent.contains(button)).toEqual(true);
});

it('disables input field if loading', () => {
  const queryComponent = shallow(<QueryComponent loading={true} currentQuery='stuff' />);
  const button = <button className="btn btn-outline-secondary disabled" type="button">Search</button>;
  expect(queryComponent.contains(button)).toEqual(true);
});

it('enables search button if there is text in the input field', () => {
  const queryComponent = shallow(<QueryComponent loading={false} currentQuery='stuff' />);
  const button = <button className="btn btn-outline-secondary " type="button">Search</button>;
  expect(queryComponent.contains(button)).toEqual(true);
});
