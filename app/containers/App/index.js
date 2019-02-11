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
import Profile from '../../components/views/Profile'
import UpdateSettings from '../../components/views/Profile/updateSettings'
import Notification from '../../components/views/Notification';
import SearchLocation from '../../components/views/SearchLocation';

const SettingsNavigator = createStackNavigator({
  Profile,
  UpdateSettings,
})

const FormNavigator = createStackNavigator({
  RequestForm,
  BloodRequest,
  SearchLocation,
})

const TabNavigator = createBottomTabNavigator(
  {
    RequestForm: FormNavigator,
    Profile:SettingsNavigator,
    Notification,
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