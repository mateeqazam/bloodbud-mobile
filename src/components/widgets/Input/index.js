/**
*
* Input
*
*/

import React from 'react';
import { View, Text, TextInput } from 'react-native';
// import PropTypes from 'prop-types';
import Icon from '../Icon'

import { InputFieldWrapper, InputWrapper, StyledIcon } from './styles';


class Input extends React.Component {
  render() {
    const { icon, type, placeholder, secureTextEntry } = this.props
    return (
      <InputFieldWrapper >
        <Icon size={30} name={icon} />
        <InputWrapper
          secureTextEntry
          keyboardType={type}
          placeholder={placeholder}
          underlineColorAndroid="transparent"

        />
      </InputFieldWrapper>
    );
  }
}

Input.propTypes = {

};

export default Input;
