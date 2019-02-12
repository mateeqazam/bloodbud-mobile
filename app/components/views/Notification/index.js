/**
*
* Notification
*
*/

import React from 'react';
import { View } from 'react-native';
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
  render() {
    const arr = [1,2,3,4,5,6,7,8,9]
    return (
      <Container>

            {arr.map(i => {
              return (
<Wrapper key={i}
              onPress={()=>this.props.navigation.navigate('NotificationDetail')}>
              <Icon marginTop={7} fontSize={22} name={'mapMarker'} />
              <InfoView>
                <Text>{'AB+ Blood Needed'}</Text>
                <Text>{'Jinnah Hospital Lahore'}</Text>
              </InfoView>
            </Wrapper>
              )
            }

            )}
      </Container>
    );
  }
}

export default withAuthenticator(Notification)