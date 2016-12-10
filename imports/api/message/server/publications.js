import { Meteor } from 'meteor/meteor';
import { Messages } from '/imports/api/message/messages';
import { MessageRooms } from '/imports/api/message/messageRooms';

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

// Don't return findOne - will return the object and find returns a cursor.
// A publication from meteor expects a cursor, a findOne will error
Meteor.publish("messageRoom", function (toUserId) {
   return MessageRooms.find({
    userId1: this.userId,
    userId2: toUserId
 });
});
