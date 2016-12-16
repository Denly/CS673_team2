import React, { Component } from 'react';
import MessageText from '../components/message_text.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import { Messages } from '/imports/api/message/messages.js';
import { Control } from '/imports/api/control/control.js';
import { MessageRooms } from '/imports/api/message/messageRooms';

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

      // new msgRoom
      var msgRoom = MessageRooms.findOne({userId1: Meteor.userId(), userId2: this.props.params.id});

      this.props.clientSendMessage(this.props.params.id, value, msgRoom);
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
    // Object destructuring instead of const loading = this.props.loading
    const { loading } = this.props;

    return loading ? (
      <div> Loading </div>
    ): (
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
  var singleUserSub = Meteor.subscribe('singleUser', toUserId);
  var toUser = Meteor.users.findOne(toUserId);
  Meteor.subscribe('messagesBetweenUsers', toUserId);
  var messageRoomSub = Meteor.subscribe('messageRoom');

  // We have *3* subscriptions here already.  Need to refactor to use aggregate/composition package
  return {
     // If the subscription is not ready yet, return nothing since user not available yet on client. We are ;padoing
     loading: !singleUserSub.ready() && !messageRoomSub.ready(),
     messages: Messages.find({
      "$or": [{
        toUserId: toUserId,
        fromUserId: Meteor.userId()
      }, {
        toUserId: Meteor.userId(),
        fromUserId: toUserId
      }]
    }).fetch().map((m) => {
      m.isOwner = (m.fromUserId == Meteor.userId()) ? true : false;
      return m;
    }),
    toUserImgUrl: toUser && toUser.imageUrl(),
    // If toUser is undefined, return nothing.  If defined try to use name.
    // fall back to 'Unknown Name'
    name: toUser && toUser.profile.name || 'Unknown Name',
    clientSendMessage: Control.clientSendMessage
  };
}, Message);
