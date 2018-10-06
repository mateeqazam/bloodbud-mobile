/**
*
* App
*
*/

import React from 'react';
import { View } from 'react-native';
// import PropTypes from 'prop-types';

import Text from 'bloodbud/src/components/widgets/Text';
import Icon from 'bloodbud/src/components/widgets/Icon';

class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Sample Text</Text>
        <Text textTransform="uppercase">Sample Text</Text>
        <Text fontWeight="bold">Sample Text</Text>
        <Icon src="user" color="red" fontSize={24} />
      </View>
    );
  }
}

App.propTypes = {

};

export default App;
