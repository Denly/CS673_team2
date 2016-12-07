import { Messages } from '/imports/api/message/messages.js';
import { MessageRooms } from '/imports/api/message/messageRooms.js';
import { Images } from '/imports/api/image/images.js';
import '/imports/api/user/users.js';
import { Control } from '/imports/api/control/control.js';

/**
 * @description Puts controllers in gobal namespace
 */
Controllers = Control;

/**
 * @description Model in gobal namespace
 */
Models = {
  Images: Images,
  Messages: Messages,
  MessageRooms: MessageRooms,
};
