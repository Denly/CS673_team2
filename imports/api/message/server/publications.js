import { Meteor } from 'meteor/meteor';
import { Messages } from '/imports/api/message/messages.js';

Meteor.publish("messagesBetweenUsers", function (toUserId) {
   return Messages.find({
    "$or": [{
      toUserId: toUserId,
      fromUserId: this.userId
    }, {
      toUserId: this.userId,
      fromUserId: toUserId
    }]
 });
});
