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
  LineContainer,
  Line,
  MainView
} from './styles'

class SignUp extends React.PureComponent {

  static navigationOptions = {
    title: 'Sign Up',
  }

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
          onClick={()=>this.props.navigation.toggleDrawer()}
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
            onClick={()=>this.props.navigation.navigate('RequestForm')}
            variant='fb'
          />
          <Button 
            block='45%'
            icon='googlePlus'
            title='  GOOGLE PLUS'
            onClick={()=>this.props.navigation.navigate('BloodRequest')}
            variant='gp'
          />
        </SocialButtons>
        <Button 
          block='100%'
          title='Already Account'
          onClick={()=> this.props.navigation.navigate('SignIn')}
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
