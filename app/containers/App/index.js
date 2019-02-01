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
import Settings from '../../components/views/Settings';
import BloodGroup from '../../components/views/BloodGroup';
import BloodRequest from '../../components/views/BloodRequest';
import RequestForm from '../../components/views/RequestForm';
import Profile from '../../components/views/Profile';
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
    Profile: Profile,
    Notification: Notification,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Profile') {
          iconName =  `ios-information-circle${focused ? '' : '-outline'}`
        } else if (routeName === 'RequestForm') {
          iconName = 'ios-options'
        } else if (routeName === 'Notification') {
          iconName =  `ios-notifications${focused ? '' : '-outline'}`
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