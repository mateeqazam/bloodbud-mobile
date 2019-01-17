/**
 *
 * App
 *
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  createStackNavigator,
  createBottomTabNavigator,
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

const MyApp = createDrawerNavigator(
  {
    Notification,
    Profile,
    RequestForm,
    SignUp,
    Settings,
    Logout: SignIn,
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
    console.log('this: ', this);
    return (
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    );
  }
}

export default App;
