/**
 * Schema for user profile
 *
 */
profile = new SimpleSchema({
  name: {type: String},
  age: {type: Number, optional: true},
  intro: {type: String, optional: true},
});

Meteor.users.schema = new SimpleSchema({
  profile: {
    type: profile
  }
});

Meteor.users.allow({
  insert: function (userId, doc) {
    // the user must be logged in, and the document must be owned by the user
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    // can only change your own documents
    return true;
  },
  remove: function (userId, doc) {
    // can only remove your own documents
    return true;
  },
});

Meteor.users._transform = function(user) {
  // attach methods, instantiate a user class, etc.
  // return the object
  user.imageUrl = function(){
    return 'test';
  }
  return user;
}
