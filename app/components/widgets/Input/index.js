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
    const { icon, type, placeholder, secureTextEntry, onChangeText, width, value } = this.props

    return (
      <InputFieldWrapper >
        {icon && <StyledIcon  name={icon} />}
        <InputWrapper
          width={width}
          onChangeText={text=>onChangeText(text)}
          value={value}
          textcolor='black'
          secureTextEntry={secureTextEntry}
          keyboardType={type}
          placeholder={placeholder}
          underlineColorAndroid="transparent"
        />
      </InputFieldWrapper>
    )
  }
}

export default Input;
