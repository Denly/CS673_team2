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
