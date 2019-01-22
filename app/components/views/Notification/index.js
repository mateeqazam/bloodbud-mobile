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
          onClick={() => navigation.toggleDrawer()}
        />
    ),
  })

  render() {
    const mapStyle = {
      height: 250,
      position: 'relative',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
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
          block='30%'
        />

        <Button
          title='Reject'
          onClick={() => console.log('Reject')}
          variant='primary'
          block='30%'
        />

        <Button
          title='Refer'
          onClick={() => {
            Auth.signOut().then(() => {
              console.log('this: ', this);
              this.props.onStateChange('signIn',{})
            }).catch(e => {
							console.log('e: ', e);
						})
          }}
          block='30%'
          variant='default'
        />
</Btns>
      </Container>
    );
  }
}

export default withAuthenticator(Notification)