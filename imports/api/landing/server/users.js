Meteor.publish("discoverUsers", function () {
  return Meteor.users.find({}, {fields: {profile: 1, services: 1}});
});

profile = new SimpleSchema({
  name: {type: String},
  age: {type: Number, defaultValue: 0},
  intro: {type: String, optional: true},
});

Meteor.users.schema = new SimpleSchema({
  profile: {
    type: profile
  }
});
