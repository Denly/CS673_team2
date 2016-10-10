Messages = new Mongo.Collection('Messages');

Messages.schema = new SimpleSchema({
  text: {type: String},
  fromId: {type: String, regEx: SimpleSchema.RegEx.Id, optional: true},
  toId: {type: String, regEx: SimpleSchema.RegEx.Id, optional: true},
});
