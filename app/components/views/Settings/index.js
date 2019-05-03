/**
 *
 * MyRequests
 *
 */

import React from 'react';
import { View } from 'react-native';
import Text from '../../widgets/Text';
import Button from '../../widgets/Button';
import Icon from '../../widgets/Icon';
import { createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { MainView, ProfileView, Wrapper } from './styles';

class MyRequests extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'My Requests',
      headerLeft: (
        <Button
          onClick={() => navigation.toggleDrawer()}
          icon="bars"
          iconColor="black"
        />
      ),
      drawerLabel: '1',
      drawerIcon: ({ tintColor }) => (
        <Ionicons name="ios-create" size={20} color={tintColor} />
      ),
    };
  };

  showElement() {
    return (
      <Wrapper>
        <ProfileView>
          <Text>B+ Needed</Text>
          <Text>Jinnah Hospital</Text>
        </ProfileView>

        <Button
          variant="grey"
          bgColor="transparent"
          icon="pencil"
          iconColor="black"
          title="Edit"
          onClick={() => this.props.navigation.navigate('RequestForm')}
        />
      </Wrapper>
    );
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
    );
  }
}
export default createStackNavigator({ MyRequests });
