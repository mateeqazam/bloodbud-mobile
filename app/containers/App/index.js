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
import { Text } from 'react-native';

import { withAuthenticator } from 'aws-amplify-react-native'


import Amplify, { Auth } from 'aws-amplify'
import awsconfig from '../../../aws-exports';
Auth.configure(awsconfig);


const PageOne = () => {
  // alert('test')
  Auth.signOut().then(data => {
    console.log('this: ', this);

    this.props.onStateChange('signIn',{})
  })
  return <Notification />
  
}

// const PageOne = async () => {
//   // alert('test')
//   Auth.signOut().then(()=>{
//     console.log('this: ', this);
//   }).catch((e)=>
//   console.log('e: ', e)
//   )
//   console.log('app: ', app);

//   return (
//     {}
//   )
// }

class PageOne extends React.Component {
  test(){
    alert('1')
  }
render(){
  return (
    <Text></Text>
  )
}
}

const MyApp = createDrawerNavigator(
  {
    Notification: createStackNavigator({ Notification }),
    Profile,
    RequestForm,
    Settings,
    Logout: Notification,
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

  async getUser(){

  }

  render() {
console.log('Auth: ', Auth);
console.log('Auth: ', Auth.AuthClass);
// if(!Auth.user){
//   return <Notification />
// }

    return (
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    );
  }
}

export default withAuthenticator(App);
