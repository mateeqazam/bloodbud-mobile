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
import Icon from '../../components/widgets/Icon';
import { Text } from 'react-native';

const MyApp = createDrawerNavigator(
  {
    Profile: createStackNavigator({ Profile }),
    Notification: createStackNavigator({ Notification }),
    RequestForm: createStackNavigator({ RequestForm }),
  },
  { drawerBackgroundColor: 'lightgrey' },
)


const TabNavigator = createBottomTabNavigator(
  {
    RequestForm: RequestForm,
    Profile: Profile,
    Notification: Notification,
  },
  {

    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        console.log('routeName: ', routeName);
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Profile') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons. 
          // You can check the implementation below.
          IconComponent = HomeIconWithBadge; 
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here!
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
// export default   createStackNavigator ({ withAuthenticator(App) })
