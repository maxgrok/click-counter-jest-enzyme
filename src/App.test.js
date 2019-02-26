import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without crashing', () => {
  const wrapper = shallow(<App/>) //shallow is rendering the app and make sure it is rendering without any errors 
  console.log(wrapper.debug()) //returns the DOM as a string, helpful for debugging
  expect(wrapper).toBeFalsy(); //would not be an empty string or undefined
});
