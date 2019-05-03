/**
 *
 * App
 *
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Text } from 'react-native';
import { Auth } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';

import {
  _storeData,
  _retrieveData,
} from '../../components/common/commonMethods';

import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyRequests from '../../components/views/Settings';
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

class Logout extends React.PureComponent {
  async componentDidMount() {
    const LoggedOut = 'LoggedOut';
    const isLoggedOut = await _retrieveData(LoggedOut);
    if (isLoggedOut) {
      _storeData(LoggedOut, false);
      return this.props.navigation.navigate('Notification');
    }
    Auth.signOut().then(() => {
      this.props.onStateChange('signIn', {});
      _storeData(LoggedOut, true);
    });
  }

  render() {
    return <Text>Loading...</Text>;
  }
}

const DrawerNavigator = createDrawerNavigator(
  {
    Notifications: NotificationNavigator,
    'My Requests': MyRequests,
    'My Profile': ProfileNavigator,
    'Request for Blood': FormNavigator,
    Logout: withAuthenticator(Logout),
  },
  {
    contentOptions: {
      activeTintColor: '#e91e63',
      itemsContainerStyle: {
        marginVertical: 0,
      },
      iconContainerStyle: {
        opacity: 1,
      },
    },
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Notification: NotificationNavigator,
    'My Requests': MyRequests,
    Profile: ProfileNavigator,
    RequestForm: FormNavigator,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        const IconComponent = Ionicons;
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

export default createAppContainer(DrawerNavigator);
