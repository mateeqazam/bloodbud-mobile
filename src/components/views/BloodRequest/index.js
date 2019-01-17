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
import { createStackNavigator } from 'react-navigation'

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

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <Text fontSize={16} color="black" fontWeight='bold'>Blood Request</Text>,
      headerLeft: (
        <Button
        onClick={()=>navigation.toggleDrawer()}
        icon='bars'
        iconColor='black'
        />
      ),
    }
  }

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
          onClick={()=>this.props.navigation.navigate('BloodGroup')}
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
export default createStackNavigator({
  BloodRequest,
})