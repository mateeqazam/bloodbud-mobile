/**
*
* App
*
*/

import React from 'react';
import { View } from 'react-native';
// import PropTypes from 'prop-types';

import Text from 'bloodbud/src/components/widgets/Text';
import Icon from 'bloodbud/src/components/widgets/Icon';
import TextInput from 'bloodbud/src/components/widgets/TextInput';

// import { ThemeProvider } from 'styled-components';
// import { Font } from 'expo';
// import AppComponent from '../../components/views/SampleComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      'Segoeui-Regular': require('./Segoeui-Regular.ttf'),
    });
    this.setState({ loading: false });
  }

  render() {
    const theme = {
      fontSize: 12,
      fontFamily: 'Segoeui-Regular',
      colors: {
        text: '123',
        gray: '#DDDDDD',
        danger: '#DDDDDD',
      },
    };
    if (this.state.loading) return null;

    // return (
    //   <ThemeProvider theme={theme}>
    //     <AppComponent />
    //   </ThemeProvider>
    // );

    return (
      <View>
        <Text>Sample Text</Text>
        <Text textTransform="uppercase">Sample Text</Text>
        <Text fontWeight="bold">Sample Text</Text>
        <Icon name="user" color="red" fontSize={24} />
        <TextInput iconLeft="user" iconRight="eye" name="username" placeholder="Name" />
      </View>
    );
  }
}

App.propTypes = {

};

export default App;
