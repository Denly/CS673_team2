import { Factory } from 'meteor/dburles:factory';
import React from 'react';
import { shallow } from 'enzyme';
import { chai } from 'meteor/practicalmeteor:chai';
import App from './App.jsx';

describe('App', () => {
  it('should render App', () => {    
    const app = shallow(<App/>);
    chai.assert(app.find('.nav-wrapper'));
    chai.assert(app.find('.container'));
    chai.assert(app.find('.side-nav'));
    chai.assert(app.find('.message-room'));
    chai.assert(app.find('.brand-logo'));
  });
});