/**
*
* SampleComponent
*
*/

import React from 'react';
import { View } from 'react-native';
// import PropTypes from 'prop-types';
import Button from '../../widgets/Button'
import Input from '../../widgets/Input'
import Text from '../../widgets/Text'
import Icon from '../../widgets/Icon'
import Checkbox from '../../widgets/Checkbox'
import IconButton from '../../widgets/IconButton'

import {
  StyledView,
  Logo,
  SocialButtons,
  MainView
} from './styles';


class SampleComponent extends React.PureComponent {


  render() {

    return (
      <MainView>
      <StyledView>

        <Logo source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
        />

        <Input type='default' placeholder='Username' icon='book'  />
        <Input type='email-address' placeholder='Email Address' icon='like'  />
        <Input secureTextEntry type='default' placeholder='Password' icon='paper-plane'  />


        <Button 
          title='Sign Up'
          onClick={()=>console.log('sign up')}
          variant='default'
          block
        />
        <Text> ──────── Or Connect with ──────── </Text>

        <SocialButtons>

        <Button 
          title='FACEBOOK'
          onClick={()=>console.log('FB')}
          variant='success'
        />

        <Button 
          title='GOOGLE PLUS'
          onClick={()=>console.log('G')}
          variant='primary'
        />
      </SocialButtons>


        <Button 
          block
          title='Already Account'
          onClick={()=>console.log('already account')}
          variant='grey'
        />


      </StyledView>
      </MainView>
    );
  }
}

SampleComponent.propTypes = {

};

export default SampleComponent;
