/**
 *
 * App
 *
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons'
import SignUp from '../../components/views/SignUp';
import SignIn from '../../components/views/SignIn';
import Profile from '../../components/views/Settings';
import BloodGroup from '../../components/views/BloodGroup';
import BloodRequest from '../../components/views/BloodRequest';
import RequestForm from '../../components/views/RequestForm';
import Settings from '../../components/views/Profile';
import Notification from '../../components/views/Notification';
import SearchLocation from '../../components/views/SearchLocation';
import Icon from '../../components/widgets/Icon';
import { Text } from 'react-native';

const MainNavigator = createStackNavigator({
  RequestForm,
  SearchLocation,
});

const TabNavigator = createBottomTabNavigator(
  {
    RequestForm: MainNavigator,
    Notification,
    Profile,
    Settings,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName
        if (routeName === 'Settings') {
          iconName = 'ios-options'
        } else if (routeName === 'RequestForm') {
          iconName = 'ios-create'
        } else if (routeName === 'Notification') {
          iconName =  `ios-notifications${focused ? '' : '-outline'}`
        } else if (routeName === 'Profile') {
          iconName = 'ios-contact'
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
)

export default TabNavigator