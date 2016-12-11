import { Mongo } from 'meteor/mongo';

export const Messages = new Mongo.Collection('Messages');

/**
 * Schema for messages exchanged between two users.
 * By default optional is false, all keys are required.
 */
Messages.schema = new SimpleSchema({
  text: {type: String, optional: true},
  fromUserId: {type: String, regEx: SimpleSchema.RegEx.Id},
  toUserId: {type: String, regEx: SimpleSchema.RegEx.Id},
  imgId: {type: String, regEx: SimpleSchema.RegEx.Id, optional: true},
  createdAt: {type: Date},
});

Messages.allow({
  insert: function (userId, doc) {
    if (!userId) return false;
    // the user must be logged in, and the document must be owned by the user
    return true;
  },
  update: function (userId, doc, fields, modifier) {
   if (!userId) return false;
    // can only change your own documents
    return false;
  },
  remove: function (userId, doc) {
    // can only remove your own documents
   if (!userId) return false;
    return false;
  },
});
