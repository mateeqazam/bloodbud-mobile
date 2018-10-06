/* eslint-disable global-require */
import React from 'react';
import { UIManager } from 'react-native';
import { AppLoading, Font } from 'expo';

import AppRoot from './src/main';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  componentDidMount() {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  loadResourcesAsync = async () => Promise.all([
    // TODO: Remove unudsed fonts to speed up application loading
    Font.loadAsync({
      FontAwesome: require('./assets/fonts/FontAwesome.ttf'),

      'Segoeui-Light': require('./assets/fonts/Segoeui-Light.ttf'),
      'Segoeui-SemiLight': require('./assets/fonts/Segoeui-SemiLight.ttf'),
      'Segoeui-Regular': require('./assets/fonts/Segoeui-Regular.ttf'),
      'Segoeui-Italic': require('./assets/fonts/Segoeui-Italic.ttf'),
      'Segoeui-Semibold': require('./assets/fonts/Segoeui-Semibold.ttf'),
      'Segoeui-Bold': require('./assets/fonts/Segoeui-Bold.ttf'),
    }),
  ]);

  handleLoadingError = (error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    }

    return (
      <AppRoot />
    );
  }
}
