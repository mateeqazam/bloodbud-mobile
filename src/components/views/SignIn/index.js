/**
*
* SignIn
*
*/

import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import Button from '../../widgets/Button'
import Input from '../../widgets/Input'
import Text from '../../widgets/Text'
import Icon from '../../widgets/Icon'
import Checkbox from '../../widgets/Checkbox'
// import IconButton from '../../widgets/IconButton'

import {
  StyledView,
  Logo,
  SocialButtons,
  TextWrap,
  LogoWrap,
  MainView
} from './styles';


class SignIn extends React.PureComponent {


  render() {

    return (
      <MainView>
      <StyledView>

        <LogoWrap><Logo source={{uri: 'https://facebook.github.io/react/logo-og.png'}} /></LogoWrap>

        <Input type='email-address' placeholder='Email Address' icon='mailForward'  />
        <Input secureTextEntry type='default' placeholder='Password' icon='lock'  />
        <TextWrap><Text>Forget Password?</Text></TextWrap>

        <Button 
          title='Sign In'
          onClick={()=>console.log('sign in')}
          variant='default'
          block='100%'
        />
        <Text> ──────── Or Connect with ──────── </Text>

        <SocialButtons>

        <Button 
          block='45%'
          icon='facebook'
          title='FACEBOOK'
          onClick={()=>console.log('FB')}
          variant='success'
        />

        <Button 
          block='45%'
          icon='google'
          title='GOOGLE PLUS'
          onClick={()=>console.log('G')}
          variant='primary'
        />
      </SocialButtons>


        <Button 
          block='100%'
          title='Sign Up'
          onClick={()=>console.log('sign up')}
          variant='grey'
        />


      </StyledView>
      </MainView>
    );
  }
}

SignIn.propTypes = {

};

export default SignIn;
