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
  createAppContainer,
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Settings from '../../components/views/Settings';
import BloodRequest from '../../components/views/BloodRequest';
import RequestForm from '../../components/views/RequestForm';
import FormSuccess from '../../components/views/RequestForm/success';
import Profile from '../../components/views/Profile';
import UpdateSettings from '../../components/views/Profile/updateSettings';
import Notification from '../../components/views/Notification';
import NotificationDetail from '../../components/views/Notification/notification';
import SearchLocation from '../../components/views/SearchLocation';

const NotificationNavigator = createStackNavigator({
  Notification,
  NotificationDetail,
});

const ProfileNavigator = createStackNavigator({
  Profile,
  UpdateSettings,
});

const FormNavigator = createStackNavigator({
  RequestForm,
  SearchLocation,
  BloodRequest,
  FormSuccess,
});

const TabNavigator = createBottomTabNavigator(
  {
    Notification: NotificationNavigator,
    'My Requests': Settings,
    Profile: ProfileNavigator,
    RequestForm: FormNavigator,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'My Requests') {
          iconName = 'ios-options';
        } else if (routeName === 'RequestForm') {
          iconName = 'ios-create';
        } else if (routeName === 'Notification') {
          iconName = `ios-notifications${focused ? '' : '-outline'}`;
        } else if (routeName === 'Profile') {
          iconName = 'ios-contact';
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(TabNavigator);
