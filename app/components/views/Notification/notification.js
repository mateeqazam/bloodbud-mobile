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

import { withAuthenticator } from 'aws-amplify-react-native'
import { Auth } from 'aws-amplify'

import {
  Container,
  Pic,
  Wrap,
  Btns,
} from './styles';

class Notification extends React.PureComponent {



  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
          url: 'http://bam.tech',
          title: 'Wow, did you see that?'
      }, {
        // Android only:
        dialogTitle: 'complete action',
        // iOS only:
        excludedActivityTypes: [
          'com.apple.UIKit.activity.PostToTwitter'
        ]
      })

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

  render() {
    const mapStyle = {
      height: 100,
      borderRadius:100
    }

    let user = Auth && Auth.user ? Auth.user : ''
    return (
      <Container>
        <Wrap>
          <Pic source={{ uri: 'https://facebook.github.io/react/logo-og.png' }} />
          <Text>{user ? user.username : ''}</Text>
          <Text>Need AB+ Blood Group</Text>
        </Wrap>
        {<Map mapStyle={mapStyle} />}


          <Button
            title='Jinnah Hospital'
            bgColor='transparent'
            variant='grey'
            onClick={()=>Linking.openURL('https://www.google.com/maps?ll=37.484847,-122.148386')}
          />


        <Btns>

          <Button
            title='Share Request'
            variant='grey'
            onClick={this.onShare}
          />

          <Button
            title='Offer Help'
            onClick={() => {
              

              // Linking.openURL('sms:03336037007?body=blood needed')
              Linking.openURL('whatsapp://send?text=Blood Request')
              // Linking.openURL('whatsapp://send?text=hello&phone=923336037007')
              // Linking.openURL('insta://app')
              // Linking.openURL('fb://app')
              // 
              // Linking.openURL('tel:03336037007')
            }}
            variant='success'
          />
        </Btns>
      </Container>
    );
  }
}

export default withAuthenticator(Notification)