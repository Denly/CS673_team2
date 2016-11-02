import React, { Component } from 'react';
import MessageRoomCard from '../components/message_room_card.jsx';
import { createContainer } from 'meteor/react-meteor-data';


export default class Message extends Component {
  render() {
    return (
      <div>

        <h1><img width="150" height="150" src={'img_not_find.jpg'}alt="" className="circle"/> Name</h1>
        <ul className="collection">
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
      <div className="row">
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


  return {

  };
}, Message);
