import React, { Component } from 'react';
import MessageText from '../components/message_text.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import { Messages } from '/imports/api/message/messages.js';
import { Control } from '/imports/api/control/control.js';

class Message extends Component {
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
    var value = this.state.value.trim()

    if (event.key === 'Enter' || event.type === "click") {
      if(value == ''){
        console.log('input value cannot be null');
        return 0;
      }
      this.props.clientSendMessage(this.props.params.id, value);
      this.setState({value: ''});
      setTimeout(this.scrollBottom, 10)
    }
  }

  scrollBottom() {
    var objDiv = document.getElementById("msg_context_id");
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  createMessageText(toUserImgUrl){
    //watch out, here is the trick to pass toUserImgUrl into map
    return function(m){
      return (< MessageText {...m}
      imgSrc = {toUserImgUrl}
      key = {m._id}
      />)
    }
  }

  render() {
    return (
      <div className="msg_page_container">

        <h1><img width="50" height="50" src={this.props.toUserImgUrl}alt="" className="circle"/> {this.props.name}</h1>
        <ul className="collection" id="msg_context_id">

          {this.props.messages.map(this.createMessageText(this.props.toUserImgUrl))}

      </ul>

      <div className="row msg_input_div">
        <div className="input-field col s10">
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            onKeyPress={this.handleSubmit}
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

export default createContainer((props) => {
  var toUserId = props.params.id;
  var toUser = Meteor.users.findOne(toUserId);
  return {
    messages: Messages.find({
      "$or": [{
        toUserId:toUserId, fromUserId:Meteor.userId()
      }, {
        toUserId:Meteor.userId(), fromUserId:toUserId
      }]
    }).fetch().map((m) => {
      m.isOwner = (m.fromUserId == Meteor.userId()) ? true : false;
      return m;
    }),
    toUserImgUrl: toUser.imageUrl(),
    name: toUser.profile.name ? toUser.profile.name: 'Name',
    clientSendMessage: Control.clientSendMessage
  };
}, Message);
