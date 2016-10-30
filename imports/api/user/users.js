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
