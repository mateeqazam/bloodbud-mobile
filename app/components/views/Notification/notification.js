/**
 *
 * Notification
 *
 */

import React from 'react';
import { View, Linking, Share } from 'react-native';
// import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';
import Button from '../../widgets/Button';
import Icon from '../../widgets/Icon';
import Text from '../../widgets/Text';
import Map from '../Map';

import { withAuthenticator } from 'aws-amplify-react-native';
import { Auth } from 'aws-amplify';

import { Container, Pic, Wrap, Btns } from './styles';

class Notification extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Donation Needed',
      onBackPress: () => navigation.pop(),
    };
  };

  onShare = async () => {
    try {
      const result = await Share.share(
        {
          message:
            'React Native | A framework for building native apps using React',
          url: 'http://bam.tech',
          title: 'Wow, did you see that?',
        },
        {
          // Android only:
          dialogTitle: 'complete action',
          // iOS only:
          excludedActivityTypes: ['com.apple.UIKit.activity.PostToTwitter'],
        }
      );

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

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

  showElement(key, value) {
    return (
      <Wrap>
        <Text>{key}</Text>
        <Text>{value}</Text>
      </Wrap>
    );
  }

  render() {
    const mapStyle = {
      height: 100,
      borderRadius: 100,
    };

    const location = '31.4845414,74.2973885999999';
    let user = Auth && Auth.user ? Auth.user : '';
    const mapUrl = 'https://www.google.com/maps?ll=' + location;
    const sms = 'sms:03336037007?body=I saw your post, I can help';
    // Linking.openURL('fb://app')
    return (
      <Container paddingHorizontal={10}>
        {this.showElement('Blood Group', 'AB+')}
        {this.showElement('Blood Type', 'RBC')}

        <Text borderBottomWidth="1px" paddingVertical="20px">
          Pick and Drop Facility is available
        </Text>
        <Text paddingVertical="20px">Notes: Need Urgent Help!</Text>

        <Map showLocation={location} mapStyle={mapStyle} />

        <Button
          noCenter
          btnPadding="1px"
          block="100%"
          title="Jinnah Hospital"
          bgColor="transparent"
          variant="grey"
          fontSize={16}
          icon="map-marker"
          iconColor="tomato"
          onClick={() => this.openApp(mapUrl)}
        />
        <Text marginTop="10px" fontSize={16}>{`Requested By: ${
          user ? user.username : 'zubair'
        }`}</Text>

        <Btns>
          <Button
            title="Share Request"
            block={'80%'}
            variant="grey"
            onClick={this.onShare}
          />

          <Button
            block={'80%'}
            title="Offer Help"
            onClick={() => this.openApp(sms)}
            variant="success"
          />
        </Btns>
      </Container>
    );
  }
}

export default withAuthenticator(Notification);
