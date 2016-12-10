import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Messages } from '/imports/api/message/messages';

// Create meteor method for creating messages to add security - can do security checking here
// adds type checking and other validations to gaurantee authentic data
Meteor.methods({
  createMessage(text, toUserId) {
    check(text, String);
    check(toUserId, String);

    // Safe way of throwing meteor errors - error type, short error message, detailed error message (optional)
    if (text.length < 1) {
      throw new Meteor.Error('invalid-text', 'This message is too short')}
    if (text.length > 50000) {
      throw new Meteor.Error('invalid-text', 'This message is too long')}
    const message = {
      fromUserId: this.userId,
      toUserId: toUserId,
      text: text,
      createdAt: new Date()
    }

    return Messages.insert(message);
  }
})
