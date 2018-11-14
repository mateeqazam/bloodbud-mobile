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
  MainView,
  MainWrapper,
  InfoView,
  Logo,
  ProfileView,
  Wrapper,
  Info
} from './styles';

class BloodRequest extends React.PureComponent {
  render() {
    let arr = []
    for (let i=0;i<9;i++){
      arr.push(
        <Wrapper key={i}>
        <ProfileView>
          <Logo source={{uri: 'https://facebook.github.io/react/logo-og.png'}} />
          <InfoView>
              <Text fontWeight='bold'>{`Ali ${i}`}</Text>
              <Info>
                <Text>Age:</Text>
                <Text fontWeight='bold'>{` ${i}  `}</Text>
                <Text>- Blood</Text>
                <Text fontWeight='bold'>{`  AB+ `}</Text>
              </Info>
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
        <MainWrapper>
          {arr}
        </MainWrapper>
      </MainView>
    );
  }
}

BloodRequest.propTypes = {

};

export default BloodRequest;
