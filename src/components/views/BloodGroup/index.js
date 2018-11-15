/**
*
* BloodGroup
*
*/

import React from 'react';
import Checkbox from '../../widgets/Checkbox'

import {
  MainView,
  Wrapper
} from './styles';

class BloodGroup extends React.PureComponent {
  static navigationOptions = {
    title: 'Blood Group',
  }

  showType(type,check){
    return (
      <Wrapper>
        <Checkbox value={check} label={type}></Checkbox>
      </Wrapper>
    )
  }
  render() {
    return (
      <MainView>
        {this.showType('A -ve',true)}
        {this.showType('A +ve',false)}
        {this.showType('B +ve',false)}
        {this.showType('AB +ve',false)}
        {this.showType('O +ve',false)}
        {this.showType('B -ve',true)}
        {this.showType('AB -ve',true)}
        {this.showType('O -ve',true)}
        {this.showType('O -ve',true)}
        {this.showType('O -ve',true)}
        {this.showType('O -ve',true)}
      </MainView>
    );
  }
}

export default BloodGroup;
