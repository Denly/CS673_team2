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
// Composite publish - first publish MessageRooms related to the current logged in userId
// For each messageRoom we also publish the latest Message between the two users
// For each of the latest messages, we publish the user data - like a join
Meteor.publishComposite("messageRoomsFromLoggedInUser", function () {
  return {
    find() {
      return MessageRooms.find({
       "$or": [{
         userId1: this.userId
        }, {
         userId2: this.userId,
       }]
     });
   }, children: [{
     find(messageRoom) {
        return Messages.find({
         "$or": [{
           toUserId: messageRoom.userId1,
           fromUserId: messageRoom.userId2
         }, {
           toUserId: messageRoom.userId2,
           fromUserId: messageRoom.userId1
         }]
      }, {
        // For each messageRoom we only need to subscribe to the latest msg, to save on performance
        limit: 1,
        sort: { createdAt: -1}
      })
    }, children: [{
      find(message) {
        return Meteor.users.find({
          "$or": [{_id: message.fromUserId }, {_id: message.toUserId}]
        }, {
          fields: {
            profile: 1,
            'services.facebook.id': 1
          }
        })
      }
    }]
   }]
  }
});
