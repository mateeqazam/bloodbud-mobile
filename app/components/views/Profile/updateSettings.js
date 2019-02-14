/**
*
* UpdateSettings
*
*/

import React from 'react';
import Button from '../../widgets/Button'
import { View, Text } from 'react-native'
import Input from '../../widgets/Input'

import {
  Container,
} from './styles';

class UpdateSettings extends React.PureComponent {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Change Password',
      onBackPress: () => navigation.pop()
    }
  }

  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <Container>
        <Input width='100%' placeholder='Old Password' onChangeText={ old => this.setState({old})} />
        <Input width='100%' placeholder='New Password' onChangeText={ newPass => this.setState({newPass})} />
        <Input width='100%' placeholder='Confirm Password' onChangeText={ confirm => this.setState({confirm})} />

        <Button
          marginTop={20}
          title="Change Password"
          onClick={()=>{}}
          variant='default'
          block='100%'
        />
      </Container>
    )
  }
}
export default UpdateSettings