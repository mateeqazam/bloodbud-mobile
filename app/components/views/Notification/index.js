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
  Pic,
  Wrap,
  Btns,
} from './styles';

class Notification extends React.PureComponent {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <Text fontSize={16} color="black" fontWeight='bold'>Notification</Text>,
    headerLeft: (
        <Button
          icon='bars'
          iconColor='black'
          onClick={() => {}}
        />
    ),
  })

  render() {
    const mapStyle = {
      height: 250,
    };
    let user = Auth && Auth.user ? Auth.user : ''
    return (
      <Container>
        {<Map mapStyle={mapStyle} />}
        <Wrap>
          <Pic source={{ uri: 'https://facebook.github.io/react/logo-og.png' }} />
          <Text>{user ? user.username : ''}</Text>
          <Text>Need AB+ Blood Group</Text>
        </Wrap>

        <Btns>
          <Button
            title='Accept'
            onClick={() => console.log('Accept')}
            variant='success'
          />

          <Button
            title='Reject'
            onClick={() => console.log('Reject')}
            variant='primary'
          />

          <Button
            title='Refer'
            onClick={() => console.log('logout')}
            variant='default'
          />
        </Btns>
      </Container>
    );
  }
}

export default withAuthenticator(Notification)