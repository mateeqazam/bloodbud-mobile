/**
*
* Input
*
*/

import React from 'react';
import { View } from 'react-native';
import { InputFieldWrapper, InputWrapper, StyledIcon } from './styles';

class Input extends React.Component {
  render() {
    const { icon, ...restProps } = this.props
    return (
      <InputFieldWrapper >
        {icon && <StyledIcon name={icon} />}
        <InputWrapper {...restProps} />
      </InputFieldWrapper>
    )
  }
}

export default Input;
