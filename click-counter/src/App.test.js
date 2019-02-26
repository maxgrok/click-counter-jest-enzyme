import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App Component
 * @function setup
 * @param {object } props - Component props specific to this setup
 * @param {any} state - initial state for setup
 * @returns {ShallowWrapper} 
 */
const setup = (props={}, state=null) =>{
  return shallow(<App {...props} />)
} //setup app to take props and state 

test('renders without crashing', () => {
  const wrapper = shallow(<App />); //data-test attribute
  const appComponent = wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(1);
});

test('renders increment button', ()=>{
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='increment-button']")
  expect(appComponent.length).toBe(1);
});

test('renders counter display', ()=>{
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='counter-display']")
  expect(appComponent.length).toBe(1);
});

test('counter starts at 0', ()=>{

});

test('clicking button increments counter display', ()=>{

});
