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



import { withAuthenticator } from 'aws-amplify-react-native'
import { Auth } from 'aws-amplify'
import awsconfig from '../../../aws-exports';
Auth.configure(awsconfig);

const MyApp = createDrawerNavigator(
  {
    Notification: createStackNavigator({ Notification }),
    Profile: createStackNavigator({ Profile }),
    RequestForm,
    Settings,
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
