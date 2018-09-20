/**
*
* SampleComponent
*
*/

import React from 'react';
import { Text } from 'react-native';
// import PropTypes from 'prop-types';

import Button from '../../widgets/Button'
import Input from '../../widgets/Input'

import {
  StyledView
} from './styles';

class SampleComponent extends React.PureComponent {
  render() {
    return (
      <StyledView>
<Input />
        <Button 
          title='1Learn More'
          onClick={()=>console.log('button clicked')}
          variant='default'
        />

        <Button 
          title='1Learn More'
          onClick={()=>console.log('button clicked')}
          variant='success'
        />

        <Button 
          title='1Learn More'
          onClick={()=>console.log('button clicked')}
          variant='primary'
        />

        <Button 
          title='1Learn More'
          onClick={()=>console.log('button clicked')}
          variant='grey'
        />


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
