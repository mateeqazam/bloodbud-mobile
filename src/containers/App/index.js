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
import Profile from '../../components/views/Profile'
import Notification from '../../components/views/Notification'

const RootStack = createBottomTabNavigator(
  {
    Profile,
    Notification,
    Settings,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Profile') {
          iconName = `ios-body${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }else if (routeName === 'Notification') {
          iconName = `ios-notifications${focused ? '' : '-outline'}`;
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
  Profile:RootStack,
  Home:SignUp,
  BloodRequest,
  BloodGroup,
  RequestForm,
  'Logout':SignIn,
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
    )
  }
}

export default App;
