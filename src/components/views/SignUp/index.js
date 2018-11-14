/**
*
* SignUp
*
*/

import React from 'react';
import Button from '../../widgets/Button'
import Input from '../../widgets/Input'
import Text from '../../widgets/Text'

import {
  StyledView,
  Logo,
  SocialButtons,
  MainView
} from './styles';


class SignUp extends React.PureComponent {


  render() {

    return (
      <MainView>
      <StyledView>
        <Logo source={{uri: 'https://facebook.github.io/react/logo-og.png'}} />
        <Input type='default' placeholder='Username' icon='user'  />
        <Input type='email-address' placeholder='Email Address' icon='envelope'  />
        <Input secureTextEntry type='default' placeholder='Password' icon='lock'  />
        <Button 
          title='Sign Up'
          onClick={()=>console.log('sign up')}
          variant='default'
          block='100%'
        />
        <Text>{`──────── Or Connect with ────────`}</Text>
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
          title='Already Account'
          onClick={()=>console.log('already account')}
          variant='grey'
        />
      </StyledView>
      </MainView>
    );
  }
}

SignUp.propTypes = {

};

export default SignUp;
