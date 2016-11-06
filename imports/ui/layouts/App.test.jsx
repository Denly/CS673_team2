import { Factory } from 'meteor/dburles:factory';
import React from 'react';
import { shallow } from 'enzyme';
import { chai } from 'meteor/practicalmeteor:chai';
import App from './App.jsx';

describe('App', () => {
  it('should render App side-nav', () => {
    const app = shallow(<App/>);
    chai.assert.equal(app.find('#mobile-demo').length, 1);
    chai.assert.equal(app.find('.side-nav').length, 1);
    chai.assert.equal(app.find('.nav-wrapper').length, 1);
  });
});
