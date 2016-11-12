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

if(Meteor.server){
  MessageRooms._ensureIndex({fromUserId: 1, toUserId: -1}, {unique: true});
}

MessageRooms.allow({
  insert: function (userId, doc) {
    // the user must be logged in, and the document must be owned by the user
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    // can only change your own documents
    return true;
  },
  remove: function (userId, doc) {
    // can only remove your own documents
    return false;
  },
});
