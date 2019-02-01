/**
*
* Settings
*
*/

import React from 'react';
import { View} from 'react-native';
import Text from '../../widgets/Text'
import Button from '../../widgets/Button'
import Icon from '../../widgets/Icon'
import { createStackNavigator } from 'react-navigation'

import {
  MainView,
  ProfileView,
  Wrapper
} from './styles';

class Settings extends React.PureComponent {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <Text fontSize={16} color="black" fontWeight='bold'>Settings</Text>,
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
      <MainView>
        {this.showElement('Name','Ali','user')}
        {this.showElement('Email','ali@gmail.com','envelope')}
        {this.showElement('Phone Number','090078601','phone')}
        {this.showElement('Change Password','*****','lock')}
      </MainView>
    )
  }
}
export default Settings //createStackNavigator({Settings})