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

// ignoring a react-navigation warning
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Class RCTCxxModule']);

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}