var functions = require('firebase-functions');
var admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);
var wrotedata;
var tokenunique;
var usser;
var payload;
exports.Pushtriger = functions.database.ref('/chatInfo/{chatId}').onWrite(
	(event) => {
		wrotedata = event.data.val();
		if(wrotedata.sender != wrotedata.members.member1)
		{
			usser= wrotedata.members.member1;
		}
		else
		{
			usser= wrotedata.members.member2;
		}
		admin.database().ref('/userProfile').child(wrotedata.sender).once('value').then(
			(snapshot) => { 
				tokenunique= snapshot.val().username;
				admin.database().ref('/userProfile').child(usser).once('value', data => 
				{
					payload = 
					{
						"notification": 
						{
							"title":"Nuevo Mensaje",
							"body":tokenunique + ": " + wrotedata.last,
							"sound":"default",
							"icon": "fcm_push_icon"
						},
						"data": 
						{
							"sendername":wrotedata.sender,
							"message":wrotedata.last
						}
					}
					return admin.messaging().sendToDevice(data.val().token, payload).then((response) => {
						//console.log('Pushed notifications');
					}).catch((err) => {
						console.log(err);
					})
				})
			})
	})