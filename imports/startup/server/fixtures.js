import { Control } from '/imports/api/control/control.js';

var nameDefault = "John Doe";
var introDefault = "Hi there! I'm looking to meet new people!"

var minimumUserSize = 7;
var currentUserCount = Meteor.users.find().count();
var storedUserIds = Meteor.users.find().fetch().map((user) => {return user.services.facebook.id});
var testIds = ['100014121070626', '119550128527687', '100014072081660', '100014068181522', '112897909191242', '114254839052603', '104397120027591'];
console.error("storedUserIds = " + storedUserIds);
console.error("testIds = " + testIds);
// Create dummy users to fill up the discover page - the ids must not already be inserted
if (currentUserCount < minimumUserSize)
{
		for (var i = 0; i < testIds.length; i++)
 		{
			if (!storedUserIds.includes(testIds[i]))
			{
				Control.serverNewUser(testIds[i],nameDefault,introDefault);
			}
		}
}
