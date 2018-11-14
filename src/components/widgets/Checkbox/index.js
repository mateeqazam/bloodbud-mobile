/**
*
* Checkbox
*
*/

import React from 'react';
import { CheckBox } from 'react-native';
// import PropTypes from 'prop-types';
import Text from '../Text'

import {
  StyledView
} from './styles';

class Checkbox extends React.Component {

  componentWillMount(){
    this.setState({check:this.props.value})
  }

  render() {
    let check = false
    if(this && this.state) check = this.state.check

    return (
      <StyledView>
        <CheckBox value={check} onValueChange={(check)=>{
          console.log(check,'test')
          this.setState({check})
        }} />
        <Text>{this.props.label}</Text>

      </StyledView>
    );
  }
}

Checkbox.propTypes = {

};

export default Checkbox;
