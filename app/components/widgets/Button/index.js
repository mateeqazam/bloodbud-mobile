/**
*
* Button
*
*/

import React from 'react';
import { View } from 'react-native';
// import PropTypes from 'prop-types';

import { ButtonWrapper, Wrapper } from './styles'
import Text from '../Text'
import Icon from '../Icon'

class Button extends React.Component {
  render() {
    const { onClick, title, variant, icon, iconColor, ...restProps } = this.props

    let color = variant === 'grey' ? 'black' : 'white'
    let { bgColor } = this.props
    switch(variant) {
      case 'primary':
          bgColor = 'red'
          break;
      case 'success':
          bgColor = 'green'
          break;
      case 'grey':
          bgColor = bgColor || '#DDDDDD'
          break;
      case 'default':
          bgColor = 'black'
          break;
      case 'fb':
          bgColor = '#3A64B7'
          break;
      case 'gp':
          bgColor = '#FF4745'
          break
      case 'map':
          bgColor = 'white'
          color = 'black'
          break
    }
    return (
      <Wrapper {...restProps} >
        <ButtonWrapper onPress={onClick} bgColor={bgColor} {...restProps}>
          {icon && <Icon fontSize={15} color={iconColor || 'transparent'} name={icon} />}
          <Text color={color}>{title}</Text>
        </ButtonWrapper>
      </Wrapper>
    )
  }
}


export default Button
