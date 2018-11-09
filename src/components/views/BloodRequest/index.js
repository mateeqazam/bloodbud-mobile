/**
*
* BloodRequest
*
*/

import React from 'react';
import { View } from 'react-native';
// import PropTypes from 'prop-types';
import Text from '../../widgets/Text'
import Button from '../../widgets/Button'

import {
  BloodType,
  MainView,
  MainWrapper,
  InfoView,
  Logo,
  Wrapper
} from './styles';

class BloodRequest extends React.PureComponent {
  render() {
    return (
      <MainView>
        <Text>BloodRequest</Text>
        <MainWrapper>
        <Wrapper>
          

        <Logo source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
        />
<InfoView>
          <Text>Ali</Text>
          <Text>Age 29</Text>
         </InfoView> 

        <Button 
          title='Request'
          onClick={()=>console.log('sign up')}
          variant='default'
        />

        </Wrapper>
        </MainWrapper>
      </MainView>
    );
  }
}

BloodRequest.propTypes = {

};

export default BloodRequest;
