/**
*
* BloodRequest
*
*/

import React from 'react';
import { ScrollView } from 'react-native';
// import PropTypes from 'prop-types';
import Text from '../../widgets/Text'
import Button from '../../widgets/Button'

import {
  MainView,
  MainWrapper,
  InfoView,
  Logo,
  ProfileView,
  Wrapper
} from './styles';

class BloodRequest extends React.PureComponent {
  render() {
    let a1 = []
    for (let i=0;i<9;i++){
      a1.push(
        <Wrapper>
        <ProfileView>
          <Logo source={{uri: 'https://facebook.github.io/react/logo-og.png'}} />
          <InfoView>
            <Text>Ali {i}</Text>
            <Text fontWeight={'bold'}>Age: {i} - Blood AB+</Text>
          </InfoView> 
        </ProfileView>
        <Button 
          title="Request"
          onClick={()=>console.log('request')}
          variant='default'
        />
      </Wrapper>
      )
    }

    return (
      <MainView>
        <Text>BloodRequest</Text>
        <MainWrapper>
          {a1}
        </MainWrapper>
      </MainView>
    );
  }
}

BloodRequest.propTypes = {

};

export default BloodRequest;
