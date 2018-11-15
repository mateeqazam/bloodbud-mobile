/**
*
* App
*
*/

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Font } from 'expo'
import { createStackNavigator } from 'react-navigation'

import SignUp from '../../components/views/SignUp'
import SignIn from '../../components/views/SignIn'
import Settings from '../../components/views/Settings'
import BloodGroup from '../../components/views/BloodGroup'
import BloodRequest from '../../components/views/BloodRequest'
import RequestForm from '../../components/views/RequestForm'

const RootStack = createStackNavigator(
  {
    SignUp,
    SignIn,
    BloodRequest,
    BloodGroup,
    RequestForm,
    Settings
  },
  {
    initialRouteName: 'SignUp',
  }
)

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

    return (
      <ThemeProvider theme={theme}>
        <RootStack />
      </ThemeProvider>
    );

    // return (
    //   <View>
    //     <Text textTransform="uppercase">Sample Text</Text>
    //     <Text fontWeight="bold">Sample Text</Text>
    //     <Icon name="user" color="red" fontSize={24} />
    //     <TextInput iconLeft="user" iconRight="eye" name="username" placeholder="Name" />
    //   </View>
    // );
  }
}

export default App;
