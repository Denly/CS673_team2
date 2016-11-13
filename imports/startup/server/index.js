import { Meteor } from 'meteor/meteor';
import './accounts-config.js';
import '/imports/startup/server/fixtures.js';
import '/imports/api/user/server/publications.js';
import '/imports/api/message/server/publications.js';
import '/imports/api/image/server/publications.js';

import { Control } from '/imports/api/control/control.js';
import { Messages } from '/imports/api/message/messages.js';
import { MessageRooms } from '/imports/api/message/messageRooms.js';
import { Images } from '/imports/api/image/images.js';


//put Controllers in gobal namespace
Controllers = Control;

//Model in gobal namespace
Models = {
  Images: Images,
  Messages: Messages,
  MessageRooms: MessageRooms,
};
