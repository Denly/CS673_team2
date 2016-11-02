import React, { Component } from 'react';
import MessageText from '../components/message_text.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import { Messages } from '/imports/api/message/messages.js';
import { Control } from '/imports/api/control/control.js';

export default class Message extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.clientSendMessage('id', this.state.value);
    setTimeout(this.scrollBottom, 10)

  }

  scrollBottom() {
    var objDiv = document.getElementById("msg_context_id");
    objDiv.scrollTop = objDiv.scrollHeight;
    console.log(objDiv.scrollTop);
  }

  render() {
    console.log('this.props.params');
    console.log(this.props.params);
    return (
      <div className="msg_page_container">

        <h1><img width="50" height="50" src={'img_not_find.jpg'}alt="" className="circle"/> Name</h1>
        <ul className="collection" id="msg_context_id">

          {this.props.messages.map((m) => (
            < MessageText {...m}
            key = {m._id}
            />
        ))}

        {/*
        <li className="collection-item avatar right-align">
          <span className="title">{'date'}</span>
          <p>{'message'}</p>

        </li>
        <li className="collection-item avatar">
          <img src={'img_not_find.jpg'}alt="" className="circle"/>
          <span className="title">{'date'}</span>
          <p>{'message'}</p>
        </li>*/}

      </ul>
      <div className="row msg_input_div">
        <div className="input-field col s10">
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            className="materialize-textarea"></textarea>
        </div>
        <div className="input-field col s2">
          <a onClick={this.handleSubmit} className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">send</i></a>

        </div>
      </div>
    </div>
  )
}
}

export default createContainer(() => {
  //console.log(Messages);
  //console.log(Messages.find().fetch());

  return {
    messages: Messages.find().fetch(),
    clientSendMessage: Control.clientSendMessage //function(){console.log('yo hii')},
  };
}, Message);
