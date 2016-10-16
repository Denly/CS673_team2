Meteor.publish("discoverUsers", function () {
  return Meteor.users.find({}, {fields: {profile: 1, services: 1}});
});

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
