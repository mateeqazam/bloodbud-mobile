/**
*
* Notification
*
*/

import React from 'react';
import { Linking } from 'react-native';
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
  Wrapper,
  InfoView,
  Btns,
} from './styles';

class Notification extends React.PureComponent {


  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Donations Needed nearby',
    }
  }


  openApp = (url) => {
    Linking.canOpenURL(url)
    .then((supported) => {
      if (!supported) {
        alert("unable to open app")
      } else {
        return Linking.openURL(url);
      }
    })
    .catch((err) => console.error('An error occurred', err))
  }

  render() {
    const arr = [1,2,3,4,5,6,7,8,9]
    const number = '923336037007'
    const phone = 'tel:'+number
    const whatsaPPUrl = 'whatsapp://send?text=hello&phone='+number

    return (
      <Container>
        {arr.map(i => {
          return (
            <Wrapper key={i}
              onPress={()=>this.props.navigation.navigate('NotificationDetail')}>
              <Button
                icon='phone'
                iconColor='#33CC66'
                onPress={()=>this.openApp(phone)}
              />
              <InfoView>
                <Text>{'AB+ Blood Needed'}</Text>
                <Text>{'Jinnah Hospital Lahore'}</Text>
              </InfoView>

              <Button
                left={0}
                icon='whatsapp'
                iconColor='#33CC66'
                onPress={()=>this.openApp(whatsaPPUrl)}
              />

            </Wrapper>
          )
        }
        )}
      </Container>
    );
  }
}

export default withAuthenticator(Notification)