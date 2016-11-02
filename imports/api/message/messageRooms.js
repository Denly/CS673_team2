import { Mongo } from 'meteor/mongo';

export const MessageRooms = new Mongo.Collection('MessageRooms');

MessageRooms.schema = new SimpleSchema({
  newMessageId: {type: String, regEx: SimpleSchema.RegEx.Id, optional: true},
  NumOfNewMessages: {type: Number, defaultValue: 0},
  fromUserId: {type: String, regEx: SimpleSchema.RegEx.Id},
  toUserId: {type: String, regEx: SimpleSchema.RegEx.Id},
  createdAt: {type: Date},
  updatedAt:{type: Date},
});
