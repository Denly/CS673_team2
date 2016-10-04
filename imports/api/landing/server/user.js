Meteor.publish("discoverUsers", function () {
  return Meteor.users.find({}, {fields: {profile: 1, services: 1}});
});
