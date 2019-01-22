/**
*
* Profile
*
*/

import React from 'react';
import { View} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import Button from '../../widgets/Button'
import Icon from '../../widgets/Icon'
import Text from '../../widgets/Text'

import {
  MainView,
  Container,
  ProfileView,
  Pic,
  Wrap,
  Wrapper
} from './styles'

import { withAuthenticator } from 'aws-amplify-react-native'
import { Auth } from 'aws-amplify'

class Profile extends React.PureComponent {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <Text fontSize={16} color="black" fontWeight='bold'>Profile</Text>,
      headerLeft: (
        <Button
        onClick={()=>navigation.toggleDrawer()}
        icon='bars'
        iconColor='black'
        />
      ),
    }
  }

  showElement(key,value,icon){
    return (
      <Wrapper>
      <ProfileView>
        <Icon name={icon} />
        <Text>{`  ${key}`}</Text>
      </ProfileView>
      <Text>{value}</Text>
    </Wrapper>
    )
  }


  
  render() {
    return (
      <Container>
        <Wrap>
          <Pic source={{uri: 'https://facebook.github.io/react/logo-og.png'}} />
          <Text color="white">Ibrahim</Text>
          <Text color="white">Rewards: 25</Text>
        </Wrap>
      <MainView>
      {this.showElement('Name','Ali','user')}
        {this.showElement('Email','ali@gmail.com','envelope')}
        {this.showElement('Phone Number','090078601','phone')}
        {this.showElement('Change Password','*****','lock')}
      </MainView>


        <Button
          title='Logout'
          onClick={() => {
            Auth.signOut().then(data => {
              this.props.onStateChange('signIn',{})
            })
          }}
          block='30%'
          variant='default'
        />

      </Container>
    );
  }
}

export default withAuthenticator(Profile)


// export default createStackNavigator({
//   Profile,
// })