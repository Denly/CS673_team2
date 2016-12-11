import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Users } from '/imports/api/user/users';

// Create meteor method for creating messages to add security - can do security checking here
// adds type checking and other validations to guarantee authentic data
Meteor.methods({
  editClientProfile(text) {
    check(text, String);

    // Safe way of throwing meteor errors - error type, short error message, detailed error message (optional)
    var textLength = text.length;
    if (text.length < 1) {
      throw new Meteor.Error('invalid-text', 'This message is too short')}
    if (text.length > 50000) {
      throw new Meteor.Error('invalid-text', 'This message is too long')}

    user.profile.intro = text;
    return Meteor.users.update(this.userId, {
        $set: {profile: user.profile}
      });;
  }
});
