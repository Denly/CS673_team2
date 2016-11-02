import { Mongo } from 'meteor/mongo';

export const Messages = new Mongo.Collection('Messages');
// By default optional is false, all keys are required.
Messages.schema = new SimpleSchema({
  text: {type: String, optional: true},
  fromUserId: {type: String, regEx: SimpleSchema.RegEx.Id},
  toUserId: {type: String, regEx: SimpleSchema.RegEx.Id},
  imgId: {type: String, regEx: SimpleSchema.RegEx.Id, optional: true},
  createdAt: {type: Date},
});

Messages.allow({
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
    return true;
  },
});
