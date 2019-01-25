/**
 *
 * App
 *
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import SignUp from '../../components/views/SignUp';
import SignIn from '../../components/views/SignIn';
import Settings from '../../components/views/Settings';
import BloodGroup from '../../components/views/BloodGroup';
import BloodRequest from '../../components/views/BloodRequest';
import RequestForm from '../../components/views/RequestForm';
import Profile from '../../components/views/Profile';
import Notification from '../../components/views/Notification';
import { Text } from 'react-native';

const MyApp = createDrawerNavigator(
  {
    Profile: createStackNavigator({ Profile }),
    Notification: createStackNavigator({ Notification }),
    RequestForm: createStackNavigator({ RequestForm }),
  },
  { drawerBackgroundColor: 'lightgrey' },
);

const theme = {
  fontSize: 12,
  colors: {
    text: '123',
    gray: '#DDDDDD',
    danger: '#DDDDDD',
  },
};

class App extends React.Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    );
  }
}

export default (MyApp);
// export default   createStackNavigator ({ withAuthenticator(App) })
