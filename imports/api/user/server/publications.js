Meteor.publish("discoverUsers", function () {
  return Meteor.users.find({}, {
    fields: {
      profile: 1,
      "services.facebook.id": 1
    }});
});

// "auto" publish the current user since we will always use it
Meteor.publish(null, function() {
  return Meteor.users.find({_id: this.userId}, {
    fields: {
      profile: 1,
      "services.facebook.id": 1
  }});
});

Meteor.publish('singleUser', function(userId) {
  return Meteor.users.find({_id: userId}, {
    fields: {
      profile: 1,
      "services.facebook.id": 1
  }});
});
