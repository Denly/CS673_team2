import { Factory } from 'meteor/dburles:factory';
import React from 'react';
import { shallow } from 'enzyme';
import { chai } from 'meteor/practicalmeteor:chai';
import ProfileCard from './profile_card.jsx';

describe('ProfileCard', () => {
	
if (Meteor.isServer) return;
  
  it('should render', () => {
    //create test data
    const todo = { message: 'Hi this is my introduction'};
    
    //render the data into a component
    const item = shallow(<ProfileCard todo={todo} />);
    
    //rendered DOM values are what we expect
    chai.assert(item.hasClass('materialize-textarea'));
    chai.assert(item.text().includes(todo.message));
  });
});
