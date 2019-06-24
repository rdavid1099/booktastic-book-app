import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders welcome message', () => {
  const app = shallow(<App />);
  const welcome = <h3 style={{textAlign: "center"}}>
    Where Nineties design practices meet the complexities and power of <blink>web 2.0</blink>
  </h3>;
  expect(app.contains(welcome)).toEqual(true);
});
