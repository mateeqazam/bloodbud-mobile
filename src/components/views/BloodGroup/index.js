/**
*
* BloodGroup
*
*/

import React from 'react';
import { View } from 'react-native';
// import PropTypes from 'prop-types';
import Checkbox from '../../widgets/Checkbox'
import Text from '../../widgets/Text'

import {
  BloodType,
  MainView,
  Wrapper
} from './styles';

class BloodGroup extends React.PureComponent {
  render() {
    return (
      <MainView>
      <Wrapper>
        <BloodType>
        <Checkbox value></Checkbox>
        <Text>O -ve</Text>
        </BloodType>
      </Wrapper>
      <Wrapper>
        <BloodType>
        <Checkbox value></Checkbox>
        <Text>O -ve</Text>
        </BloodType>
      </Wrapper>
      <Wrapper>
        <BloodType>
        <Checkbox value></Checkbox>
        <Text>O -ve</Text>
        </BloodType>
      </Wrapper>
      <Wrapper>
        <BloodType>
        <Checkbox value></Checkbox>
        <Text>O -ve</Text>
        </BloodType>
      </Wrapper>
      </MainView>
    );
  }
}

BloodGroup.propTypes = {

};

export default BloodGroup;
