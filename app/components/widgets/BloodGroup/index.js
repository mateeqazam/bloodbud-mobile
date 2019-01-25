/**
*
* BloodGroup
*
*/

import React from 'react';
import { Picker } from 'react-native';
// import PropTypes from 'prop-types';

class BloodGroup extends React.Component {
  render() {
    const { onValueChange, selectedValue } = this.props
    return (
      <Picker
        selectedValue = {selectedValue}
        onValueChange={onValueChange}>
        <Picker.Item label="Select Blood Group" value="" />
        <Picker.Item label="A -ve" value="A -ve" />
        <Picker.Item label="A +ve" value="A +ve" />
        <Picker.Item label="B +ve" value="B +ve" />
        <Picker.Item label="B -ve" value="B -ve" />
        <Picker.Item label="AB +ve" value="AB +ve" />
        <Picker.Item label="AB -ve" value="AB -ve" />
        <Picker.Item label="O +ve" value="O +ve" />
        <Picker.Item label="O -ve" value="O -ve" />
      </Picker>
    );
  }
}

BloodGroup.propTypes = {

};

export default BloodGroup;
