/**
*
* App
*
*/

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Font } from 'expo'
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SignUp from '../../components/views/SignUp'
import SignIn from '../../components/views/SignIn'
import Settings from '../../components/views/Settings'
import BloodGroup from '../../components/views/BloodGroup'
import BloodRequest from '../../components/views/BloodRequest'
import RequestForm from '../../components/views/RequestForm'

const SideMenu = require('react-native-side-menu');

class ContentView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+Control+Z for dev menu
        </Text>
      </View>
    );
  }
}

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

const RootStack1 = createBottomTabNavigator(
  {
    RequestForm,
    BloodRequest,
    BloodGroup,
    Settings,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'SignUp') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
)

const MyApp = createDrawerNavigator({
  SignUp,
  SignIn,
  BloodRequest,
  BloodGroup,
  'Request Form':RootStack1,
  Settings,
})

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
        <MyApp />
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
