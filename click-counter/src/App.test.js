import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App Component
 * @function setup
 * @param {object } props - Component props specific to this setup
 * @param {object} state - initial state for setup
 * @returns {ShallowWrapper} 
 */

const setup = (props={}, state=null) =>{
  const wrapper = shallow(<App {...props} />)
  if (state) wrapper.setState(state)
  return wrapper;
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
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});

test('clicking button increments counter display', ()=>{
  const counter = 7;
  const wrapper = setup(null, {counter});
  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');
  wrapper.update();

  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter + 1)
});

test('clicking button decrements counter display', ()=>{
  const counter = 7;
  const wrapper = setup(null, {counter})
  const button = findByTestAttr(wrapper, "decrement-button");
  button.simulate('click');
  wrapper.update();

  const counterDisplay = findByTestAttr(wrapper, 'counter-display');

  expect(counterDisplay.text()).toContain(counter-1);
})

test('error displays if counter attempts to decrement below 0', ()=>{
  const counter = 0;
  const wrapper = setup({counter: 0}, {counter});
  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');
  wrapper.update()
  
  const error = findByTestAttr(wrapper, 'error');

  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(error.text()).toContain("Error: ")
  expect(counterDisplay.text()).toContain(0);
});

test('error does not display if counter > 0', ()=>{
  const counter = 1;
  const wrapper = setup({counter: 0}, {counter});
  const incrementButton = findByTestAttr(wrapper, 'increment-button');
  incrementButton.simulate('click');
  wrapper.update()
  const container = findByTestAttr(wrapper, 'component-app')
  const error = wrapper.find("#error")
  expect(container.exists(error)).toBe(false);
})

test('error clears after increment button is pressed', ()=>{

});