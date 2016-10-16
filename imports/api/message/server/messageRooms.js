MessageRooms = new Mongo.Collection('MessageRooms');

MessageRooms.schema = new SimpleSchema({
  newMessageId: {type: String, regEx: SimpleSchema.RegEx.Id, optional: true},
  readYet: {type: Boolean, defaultValue: false},
  fromId: {type: String, regEx: SimpleSchema.RegEx.Id},
  toId: {type: String, regEx: SimpleSchema.RegEx.Id},
  createdAt: {type: Date},
  updatedAt:{type: Date},
});
