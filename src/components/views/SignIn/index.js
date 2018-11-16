/**
*
* SignIn
*
*/

import React from 'react';
import Button from '../../widgets/Button'
import Input from '../../widgets/Input'
import Text from '../../widgets/Text'
import { createStackNavigator } from 'react-navigation'

import {
  StyledView,
  Logo,
  SocialButtons,
  TextWrap,
  LogoWrap,
  LineContainer,
  Line,
  MainView
} from './styles';

class SignIn extends React.PureComponent {

  static navigationOptions = {
    title: 'Sign In',
  }

  render() {

    return (
      <MainView>
      <StyledView>

        <LogoWrap><Logo source={{uri: 'https://facebook.github.io/react/logo-og.png'}} /></LogoWrap>

        <Input type='email-address' placeholder='Email Address' icon='envelope'  />
        <Input secureTextEntry type='default' placeholder='Password' icon='lock'  />
        <TextWrap><Text>Forget Password?</Text></TextWrap>

        <Button 
          title='Sign In'
          onClick={()=>console.log('sign in')}
          variant='default'
          block='100%'
        />

        <LineContainer>
          <Line /> 
          <Text> Or Connect with </Text> 
          <Line />
        </LineContainer>

        <SocialButtons>

        <Button 
          block='45%'
          icon='facebook'
          title='  FACEBOOK'
          onClick={()=>console.log('FB')}
          variant='fb'
        />

        <Button 
          block='45%'
          icon='googlePlus'
          title='  GOOGLE PLUS'
          onClick={()=>console.log('G')}
          variant='gp'
        />
      </SocialButtons>


        <Button 
          block='100%'
          title='Sign Up'
          onClick={()=>this.props.navigation.navigate('SignUp')}
          variant='grey'
        />


      </StyledView>
      </MainView>
    );
  }
}
export default createStackNavigator({
  SignIn,
})