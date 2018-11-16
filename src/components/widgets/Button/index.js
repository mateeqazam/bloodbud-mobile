/**
*
* Button
*
*/

import React from 'react';
import { View } from 'react-native';
// import PropTypes from 'prop-types';

import { ButtonWrapper, TouchableOpacity } from './styles'
import Text from '../Text'
import Icon from '../Icon'


class Button extends React.Component {
  render() {
    const { onClick, title, variant, block, icon, iconColor } = this.props

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
      case 'fb':
          bgColor = '#3A64B7'
          break;
      case 'gp':
          bgColor = '#FF4745'
          break;
    }
    return (
      <TouchableOpacity block={block} onPress={()=>{onClick()}}>
        <ButtonWrapper bgColor={bgColor} >
          {icon && <Icon color={iconColor || 'white'} name={icon} />}
          <Text color={color}>{title}</Text>
        </ButtonWrapper>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {

};

export default Button;
