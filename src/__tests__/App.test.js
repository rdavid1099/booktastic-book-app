import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders welcome message', () => {
  const app = shallow(<App />);
  const welcome = <h3 style={{textAlign: "center"}}>
    Surfing the World Wide Web for books like you're back in the <blink>NINETIES</blink>!
  </h3>
;
  expect(app.contains(welcome)).toEqual(true);
});
