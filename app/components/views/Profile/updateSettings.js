/**
*
* UpdateSettings
*
*/

import React from 'react';
import Checkbox from '../../widgets/Checkbox'
import Button from '../../widgets/Button'
import { createStackNavigator } from 'react-navigation'
import { View, Text } from 'react-native'
import Input from '../../widgets/Input'

import {
  Container,
  Wrapper
} from './styles';

class UpdateSettings extends React.PureComponent {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Update Settings',
      onBackPress: () => navigation.pop()
    }
  }

  constructor(props){
    super(props)
    const {navigation: {state: { params }}} = props;
    let value = ''
    if(params && params.attribute){
      const {attribute, val} = params
      value = val
      // alert(attribute)
      // this.setLocation(selectedLocation)
    }
    this.state = {
      value
    }

  }

  render() {
    const {value} = this.state
    return (
      <Container>


        <Input value={value} icon='edit' width='100%' type='default' placeholder='Update Value' onChangeText={ value => this.setState({value})} />


        <Button
          marginTop={10}
          title="Update"
          onClick={()=>{}}
          variant='default'
          block='100%'
        />
      </Container>
    )
  }
}
export default UpdateSettings