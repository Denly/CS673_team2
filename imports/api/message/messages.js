import { Mongo } from 'meteor/mongo';

export const Messages = new Mongo.Collection('Messages');
// By default optional is false, all keys are required.
Messages.schema = new SimpleSchema({
  text: {type: String, optional: true},
  fromId: {type: String, regEx: SimpleSchema.RegEx.Id},
  toId: {type: String, regEx: SimpleSchema.RegEx.Id},
  imgId: {type: String, regEx: SimpleSchema.RegEx.Id, optional: true},
  createdAt: {type: Date},
});
