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

/**
 * Return ShallowWrapper containing node(s) with the given data-test value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} val - Value of data-test attribute for search 
 * 
 */
const findByTestAttr = (wrapper, val)=>{
  return wrapper.find(`[data-test="${val}"]`);
}

test('renders without crashing', () => {
  const wrapper = setup(); //data-test attribute
  const appComponent = findByTestAttr(wrapper, "component-app")
  expect(appComponent.length).toBe(1);
});

test('renders increment button', ()=>{
  const wrapper = shallow(<App />);
  const button = findByTestAttr(wrapper, 'increment-button')
  expect(button.length).toBe(1);
});

test('renders counter display', ()=>{
  const wrapper = shallow(<App />);
  const counterDisplay = wrapper.find("[data-test='counter-display']")
  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', ()=>{

});

test('clicking button increments counter display', ()=>{

});
