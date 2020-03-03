import firebase, { RNFirebase } from 'react-native-firebase';
import { Notification, NotificationOpen } from 'react-native-firebase';
import { Alert, PushNotificationIOS } from 'react-native';
import API from '../WebServices/API';
import AsyncStorage from '@react-native-community/async-storage';
import { PostData } from '../WebServices/webAPIRequest';
import * as AppConstants from './AppConstants';
var PushNotification = require("react-native-push-notification");

export function RegisterForPushNotification(navigation) {
    firebase.messaging().getToken()
        .then((token) => {
        });

    firebase.messaging().hasPermission()
        .then(enabled => {
            if (enabled) {
                ReceiveNotificationOpened(navigation);
                ReceiveNotification(navigation);
            } else {
                firebase.messaging().requestPermission()
                    .then(() => {
                        ReceiveNotificationOpened(navigation);
                        ReceiveNotification(navigation);
                    })
                    .catch(() => {
                    });
            }
        });

    // const channel = new firebase.notifications.Android.Channel(
    //     '2',
    //     'Channel Name',
    //     firebase.notifications.Android.Importance.Max
    // ).setDescription('A natural description of the channel');
    // firebase.notifications().android.createChannel(channel);
    // const notification = new firebase.notifications.Notification()
    //     .setTitle('Android Notification Actions')
    //     .setBody('Action Body')
    //     .setNotificationId('notification-action')
    //     .setSound('default')
    //     .android.setChannelId('notification-action')
    //     .android.setPriority(firebase.notifications.Android.Priority.Max);
    // // Build an action
    // const action = new firebase.notifications.Android.Action('test_action', 'ic_launcher', 'My Test Action');

    // // Build a remote input
    // const remoteInput = new firebase.notifications.Android.RemoteInput('inputText')
    //     .setLabel('Message');

    // // Add the remote input to the action
    // action.addRemoteInput(remoteInput);

    // // Add the action to the notification
    // notification.android.addAction(action);

    // // Display the notification
    // firebase.notifications().displayNotification(notification);
    // PushNotification.configure({
    //     // (optional) Called when Token is generated (iOS and Android)
    //     onRegister: function(token) {
    //     },

    //     // (required) Called when a remote or local notification is opened or received
    //     onNotification: function(notification) {

    //       // process the notification here

    //       // required on iOS only 
    //       notification.finish(PushNotificationIOS.FetchResult.NoData);
    //     },
    //     // Android only
    //     senderID: "210630931820",
    //     // iOS only
    //     permissions: {
    //       alert: true,
    //       badge: true,
    //       sound: true
    //     },
    //     popInitialNotification: true,
    //     requestPermissions: true
    //   });
}

// function _onNotification(notification) {
//     if (notification != null && notification._data != null && notification._data.message != null) {
//         var Data = JSON.parse(notification._data.message);

//         if (Data.message != '') {
//             PushNotificationIOS.presentLocalNotification({
//                 alertTitle: notification._data.title,
//                 alertBody: Data.message,
//             });
//         }

//         ChatHub.ReceiveNewMessage(Data.swipeid, Data.message, Data.messagebyid, Data.messagetoid, Data.appid, Data.id, Data.messageat, Data.deliveredat, 'Push Notification', Data.seenat);
//     }
// }


export function ReceiveNotificationOpened(navigation) {

    console.log('opem 1')
    firebase.notifications().getInitialNotification()
        .then((notificationOpen) => {
            if (notificationOpen) {
                if (notificationOpen.notification._data.screen_open_type == 'Actor') {
                    navigation.navigate(AppConstants.SCREENS.VIEWARTISTPROFILE, { artistid: notificationOpen.notification._data.open_id })
                }
                else if (notificationOpen.notification._data.screen_open_type == 'Audition') {
                    navigation.navigate(AppConstants.SCREENS.VIEWAUDITION, { auditionid: notificationOpen.notification._data.open_id })
                }

                // App was opened by a notification
                // Get the action triggered by the notification being opened
                const action = notificationOpen.action;

                // Get information about the notification that was opened
            }
        });
    return firebase.notifications().onNotificationOpened((notificationOpen) => {
        if (notificationOpen.notification._data.screen_open_type == 'Actor') {
            navigation.navigate(AppConstants.SCREENS.VIEWARTISTPROFILE, { artistid: notificationOpen.notification._data.open_id })
        }
        else if (notificationOpen.notification._data.screen_open_type == 'Audition') {
            navigation.navigate(AppConstants.SCREENS.VIEWAUDITION, { auditionid: notificationOpen.notification._data.open_id })
        }


    });

}




export function ReceiveNotification(navigation) {

    return firebase.notifications().onNotification((notification) => {
        // const localNotification = new firebase.notifications.Notification({
        //     sound: 'default',
        //     show_in_foreground: true,
        //   })
        //   .setNotificationId(notification.notificationId)
        //   .setTitle(notification.title)
        //   .setSubtitle(notification.subtitle)
        //   .setBody(notification.body)
        //   .setData(notification.data)
        //   .android.setChannelId('channelId') // e.g. the id you chose above
        //   .android.setSmallIcon('ic_launcher') // create this icon in Android Studio
        //   .android.setColor('#ffffff') // you can set a color here
        //   .android.setPriority(firebase.notifications.Android.Priority.High);
    
        // firebase.notifications()
        //   .displayNotification(localNotification)
        //   .catch(err => console.error(err));

      
        // if (notification._data !=={}) {
        //     console.log('enter  1', notification)
        //     const channel = new firebase.notifications.Android.Channel(
        //         notification.notificationId,
        //         'Channel Name',
        //         firebase.notifications.Android.Importance.Max
        //     ).setDescription('A natural description of the channel');
        //     console.log('chanhel',channel)
        //     firebase.notifications().android.createChannel(channel);
    
    
        //     const notification1 = new firebase.notifications.Notification()
        //         .setTitle('Android Notification Actions')
        //         .setBody('Action Body')
        //         .setNotificationId(notification._notificationId)
        //         .setSound('default')
        //         .android.setChannelId(notification._notificationId)
        //         .android.setPriority(firebase.notifications.Android.Priority.Max);
        //     // Build an action
        //     const action = new firebase.notifications.Android.Action('test_action', 'ic_launcher', 'My Test Action');
    
        //     // Build a remote input
        //     const remoteInput = new firebase.notifications.Android.RemoteInput('inputText')
        //         .setLabel('Message');
    
        //     // Add the remote input to the action
        //     action.addRemoteInput(remoteInput);
    
        //     // Add the action to the notification
        //     notification1.android.addAction(action);
    
        //     firebase.notifications().displayNotification(notification1);
            // let NotificationData = JSON.parse(notification.data.message);
            // firebase.notifications().setBadge(badgeCounter + 1)

            firebase.notifications().displayNotification(notification);
        // }



    });
}

export function configureNotification() {

    firebase.notifications().getInitialNotification()
        .then((notificationOpen) => {
            console.log('enter  2', notificationOpen)
            // PushNotification.configure({
            //     // (optional) Called when Token is generated (iOS and Android)
            //     onRegister: function (token) {
            //         console.log("TOKEN:", token);
            //     },

            //     // (required) Called when a remote or local notification is opened or received
            //     onNotification: function (notification) {
            //         console.log("NOTIFICATION:", notification);

            //         // process the notification
            //         if (notification.foreground == true) {
            //             PushNotification.localNotification({
            //                 //... You can use all the options from localNotifications
            //                 thitle: notification.notification.title,
            //                 message: notification.notification.body, // (required)
            //             });
            //             notification.finish(PushNotificationIOS.FetchResult.NoData);
            //         }
            //         // required on iOS only (see fetchCompletionHandler docs: https://github.com/react-native-community/react-native-push-notification-ios)

            //     },


            // });
            if (notificationOpen && notificationOpen.notification.data.message) {
            }
        });
}