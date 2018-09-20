/**
*
* Input
*
*/

import React from 'react';
import { View, Text, TextInput } from 'react-native';
// import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    return (
      <View>
        <Text>Input</Text>


      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
      />

      </View>
    );
  }
}

Input.propTypes = {

};

export default Input;
