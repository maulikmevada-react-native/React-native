import firebase from 'react-native-firebase';
// Optional flow type
import type { NotificationOpen } from 'react-native-firebase';

export default async (notificationOpen: NotificationOpen) => {
    if (notificationOpen.action === 'snooze') {
        console.log('enter back ground')
        // handle the action
    }

    return Promise.resolve();
}