/**
 *
 * Notification
 *
 */

import React from 'react';
import { Linking } from 'react-native';
// import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';
import firebase from 'react-native-firebase';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Button from '../../widgets/Button';
import Icon from '../../widgets/Icon';
import Text from '../../widgets/Text';
import Map from '../Map';

import { withAuthenticator } from 'aws-amplify-react-native';
import { Auth } from 'aws-amplify';

import { Container, Wrapper, InfoView, Row, Btns } from './styles';

class Notification extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Donations Needed nearby',
      headerLeft: (
        <Button
          onClick={() => navigation.toggleDrawer()}
          icon="bars"
          iconColor="black"
        />
      ),
    };
  };

  async componentDidMount() {
    const channel = new firebase.notifications.Android.Channel(
      'test-channel',
      'Test Channel',
      firebase.notifications.Android.Importance.Max
    ).setDescription('My apps test channel');

    // Create the channel
    firebase.notifications().android.createChannel(channel);

    //   firebase.messaging().hasPermission()
    // .then(enabled => {
    //   if (enabled) {
    //     // user has permissions
    //     alert('yes')
    //   } else {
    //     // user doesn't have permission
    //     alert('no')
    //   }
    // })
    this.notificationDisplayedListener = firebase
      .notifications()
      .onNotificationDisplayed(notification => {
        console.log('onNotificationDisplayed: ', notification);
      });
    this.notificationOpenedListener = firebase
      .notifications()
      .onNotificationOpened(notificationOpen => {
        // Get the action triggered by the notification being opened
        const action = notificationOpen.action;
        console.log('onNotificationOpened action: ', action);
        // Get information about the notification that was opened
        const notification = notificationOpen.notification;
        console.log('onNotificationOpened notification: ', notification);
        // alert('onNotificationOpened')
      });

    const notification = new firebase.notifications.Notification()
      .setTitle('Android Notification Actions')
      .setBody('Action Body')
      .setNotificationId('notificationId')
      .setSound('default')
      .setData({
        key1: 'value1',
        key2: 'value2',
      })
      .android.setChannelId('test-channel')
      .android.setSmallIcon('ic_launcher')
      .android.setAutoCancel(true)
      .android.setPriority(firebase.notifications.Android.Priority.Max);
    // // Build an action
    // const action = new firebase.notifications.Android.Action(
    //   'test_action',
    //   'ic_launcher',
    //   'My Test Action'
    // );
    // Add the action to the notification
    // notification.android.addAction(action);

    // notification.android
    //   .setChannelId('test-channel')
    //   .android.setSmallIcon('ic_launcher');

    // firebase.notifications().displayNotification(notification)
  }

  openApp = url => {
    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          alert('unable to open app');
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => console.error('An error occurred', err));
  };

  render() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const number = '923336037007';
    const phone = 'tel:' + number;
    const whatsaPPUrl = 'whatsapp://send?text=hello&phone=' + number;

    const Banner = firebase.admob.Banner;
    const AdRequest = firebase.admob.AdRequest;
    const request = new AdRequest();
    console.log('this.props.navigation', this.props.navigation);

    return (
      <Container>
        {arr.map(i => {
          return (
            <Wrapper key={i}>
              <Row>
                <Button
                  icon="phone"
                  iconColor="#33CC66"
                  onPress={() => this.openApp(phone)}
                />
                <InfoView
                  onPress={() =>
                    this.props.navigation.navigate('NotificationDetail')
                  }
                >
                  <Text>{'AB+ Blood Needed'}</Text>
                  <Text>{'Jinnah Hospital Lahore'}</Text>
                </InfoView>
              </Row>
              <Button
                icon="whatsapp"
                iconColor="#33CC66"
                onPress={() => this.openApp(whatsaPPUrl)}
              />
            </Wrapper>
          );
        })}
      </Container>
    );
  }
}

export default withAuthenticator(Notification);
