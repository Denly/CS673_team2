import React, { Component } from 'react';
import MessageText from '../components/message_text.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import { Messages } from '/imports/api/message/messages.js';

export default class Message extends Component {
  render() {
    return (
      <div className="msg_page_container">

        <h1><img width="50" height="50" src={'img_not_find.jpg'}alt="" className="circle"/> Name</h1>
        <ul className="collection">

          {this.props.messages.map((m) => (
            < MessageText {...m}
            key = {m._id}
            />
          ))}

          {/*right msg*/}
          <li className="collection-item avatar right-align">
            <span className="title">{'date'}</span>
            <p>{'message'}</p>
            {/*left msg*/}
          </li>
          <li className="collection-item avatar">
            <img src={'img_not_find.jpg'}alt="" className="circle"/>
            <span className="title">{'date'}</span>
            <p>{'message'}</p>
        </li>

      </ul>
      <div className="row msg_input_div">
          <div className="input-field col s10">
            <textarea id="textarea1" className="materialize-textarea"></textarea>
            </div>
            <div className="input-field col s2">
            <i className="material-icons">send</i>
          </div>
        </div>
    </div>
  )
}
}

export default createContainer(() => {
  console.log(Messages);
  console.log(Messages.find().fetch());

  return {messages: Messages.find().fetch()};
}, Message);
