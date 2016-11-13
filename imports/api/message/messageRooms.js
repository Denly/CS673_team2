import { Mongo } from 'meteor/mongo';

export const MessageRooms = new Mongo.Collection('MessageRooms');




/** Schema for message room data. List of messages from users. Not all the messages.*/
MessageRooms.schema = new SimpleSchema({
  newMessageId: {type: String, regEx: SimpleSchema.RegEx.Id, optional: true},
  NumOfNewMessages: {type: Number, defaultValue: 0},
  fromUserId: {type: String, regEx: SimpleSchema.RegEx.Id},
  toUserId: {type: String, regEx: SimpleSchema.RegEx.Id},
  createdAt: {type: Date},
  updatedAt:{type: Date},
});
