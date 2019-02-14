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
      headerTitle: 'My Requests'
    }
  }

  showElement(){
    return (
      <Wrapper>
      <ProfileView>
        <Text>B+ Needed</Text>
        <Text>Jinnah Hospital</Text>
      </ProfileView>

        <Button
          variant='grey'
          bgColor='transparent'
          icon='pencil'
          iconColor='black'
          title='Edit'
          onClick={() => this.props.navigation.navigate('RequestForm')}
        />


    </Wrapper>
    )
  }

  render() {

    return (
      <MainView>
        {this.showElement()}
        {this.showElement()}
        {this.showElement()}
        {this.showElement()}
        {this.showElement()}
        {this.showElement()}
        {this.showElement()}
        {this.showElement()}
      </MainView>
    )
  }
}
export default createStackNavigator({Settings})