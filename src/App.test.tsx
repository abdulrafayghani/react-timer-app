import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { Timer } from './components/Timer/Timer';

describe('App', () => {
  const container = shallow(<App />);

  it('should render a div', () => {
    expect(container.find('div').length).toEqual(1);
  });

  it('should render the Time component', ()=>{
    expect(container.containsMatchingElement(<Timer />)).toEqual(true)
  })
});