import { AppState, PushNotificationIOS } from 'react-native';
import PushNotification from 'react-native-push-notification';
import AsyncStorage from '@react-native-community/async-storage';

const _handleAppStateChange = async nextAppState => {
  if (nextAppState === 'active') {
    const value = await AsyncStorage.getItem('@alam');
    _registerLocalNotification(value);
  }
};

const _registerLocalNotification = (end: string) => {
  PushNotification.cancelAllLocalNotifications();

  const message = '오늘은 마스크를 사러가는 날입니다!';
  const last = end.slice(-1);
  let date = 0;
  if (last === '1' || last === '6') date = 1;
  else if (last === '1' || last === '6') date = 1;
  else if (last === '2' || last === '7') date = 2;
  else if (last === '3' || last === '8') date = 3;
  else if (last === '4' || last === '9') date = 4;
  else if (last === '5' || last === '0') date = 5;
  let nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + date);
  nextDate.setHours(8, 0, 0);

  PushNotification.localNotificationSchedule({
    /* Android Only Properties */
    vibrate: true,
    vibration: 300,
    priority: 'hight',
    visibility: 'public',
    importance: 'hight',

    message,
    playSound: false,

    // repeatType: 'week',
    // date: nextDate,
    date: new Date(Date.now() + 2000),
  });
};
export default {
  register: async () => {
    PushNotification.configure({
      onNotification: function(notification) {
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      popInitialNotification: true,
    });
    const value = await AsyncStorage.getItem('@alam');
    _registerLocalNotification(value);

    AppState.addEventListener('change', _handleAppStateChange);
  },
  unregister: () => {
    AppState.removeEventListener('change', _handleAppStateChange);
  },
};
