/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React from 'react';
import {YellowBox} from 'react-native';
import AppNavigator from './app/main';


import { withAuthenticator } from 'aws-amplify-react-native'
import { Auth } from 'aws-amplify'
import awsconfig from './aws-exports';
Auth.configure(awsconfig);


// ignoring a react-navigation warning
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Class RCTCxxModule']);

class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

export default withAuthenticator(App)