import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import '/imports/startup/server/index.js';
import '/imports/api/user/users.js';
import '/imports/api/user/server/publications.js';
import '/imports/api/message/messages.js';
import '/imports/api/message/messageRooms.js';
import '/imports/api/message/server/publications.js';
import '/imports/api/image/images.js';
import '/imports/api/image/server/publications.js';

Meteor.startup(() => {
  // code to run on server at startup


});
