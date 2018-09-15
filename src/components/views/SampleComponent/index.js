/**
*
* SampleComponent
*
*/

import React from 'react';
import { Text } from 'react-native';
// import PropTypes from 'prop-types';

import {
  StyledView
} from './styles';

class SampleComponent extends React.PureComponent {
  render() {
    return (
      <StyledView>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </StyledView>
    );
  }
}

SampleComponent.propTypes = {

};

export default SampleComponent;
