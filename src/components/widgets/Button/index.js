/**
*
* Button
*
*/

import React from 'react';
import { View, TouchableOpacity, Image  } from 'react-native';
// import PropTypes from 'prop-types';

import { ButtonWrapper, Text } from './styles'

class Button extends React.Component {
  render() {
    const {onClick,title,variant} = this.props

    //primary red
    //default black   
    //success green
    //grey

    const color = variant === 'grey' ? 'black' : 'white'
    let bgColor = null
    switch(variant) {
      case 'primary':
          bgColor = 'red'
          break;
      case 'success':
          bgColor = 'green'
          break;
      case 'grey':
          bgColor = '#DDDDDD'
          break;
      case 'default':
          bgColor = 'black'
          break;
  }


    return (
      <TouchableOpacity  onPress={()=>{onClick()}}>
        <ButtonWrapper bgColor={bgColor} >
          <Text color={color}> {variant} </Text>
        </ButtonWrapper>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {

};

export default Button;
