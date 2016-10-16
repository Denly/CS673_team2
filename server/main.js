import { Meteor } from 'meteor/meteor';
import '../imports/startup/server/accounts-config.js';
import '../imports/api/landing/server/users.js';
import '../imports/api/message/server/messages.js';
import '../imports/api/message/server/messageRooms.js';
import '../imports/api/profile/server/images.js';


Meteor.startup(() => {
  // code to run on server at startup
});
