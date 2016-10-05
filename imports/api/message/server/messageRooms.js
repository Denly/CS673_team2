MessageRooms = new Mongo.Collection('MessageRooms');

MessageRooms.schema = new SimpleSchema({
  newMessageId: {type: String, regEx: SimpleSchema.RegEx.Id, optional: true},
  read: {type: Boolean, defaultValue: false}
});
