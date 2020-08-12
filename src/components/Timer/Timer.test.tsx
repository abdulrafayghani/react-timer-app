import React from 'react';
import { shallow, mount } from 'enzyme';
import { Timer } from './Timer';

describe('Timer', () => {
    const container = mount(<Timer/>)

  it('should render a div', () => {
    expect(container.find('div').length).toBeGreaterThanOrEqual(1);
  });

  it('should render Timer Button', () => {
      const container = shallow(<Timer/>)
    expect(container.find('TimerButton').length).toEqual(3)
  });
  
});



