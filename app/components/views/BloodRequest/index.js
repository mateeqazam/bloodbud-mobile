/**
*
* BloodRequest
*
*/

import React from 'react';
import { View } from 'react-native';
import Text from '../../widgets/Text'
import Button from '../../widgets/Button'
import Input from '../../widgets/Input'
import BloodGroup from '../../widgets/BloodGroup'
import { CheckBox } from 'react-native-elements'

import {
  MainView,
  Row,
  Dropdown,
} from './styles';

class BloodRequest extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Request',
      onBackPress: () => navigation.pop(),
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      activeType: 'Red Blood Cells',
      bloodGroup: '',
      bloodUnit: ''
    }
  }

  renderBtn = title => {
    const {activeType} = this.state
    return (
      <Button
        marginTop={10}
        title={title}
        onClick={()=>this.setState({activeType:title})}
        variant={activeType===title?'success':'grey'}
        block='150px'
      />
    )
  }

  validateForm = () => {
    return this.props.navigation.navigate('RequestForm')
  }

  render() {
    const {bloodGroup,bloodUnit} = this.state

    return (
      <MainView>
        <Text>Blood Type Required</Text>
        <Row>
          {this.renderBtn('Red Blood Cells')}
          {this.renderBtn('Plasma')}
        </Row>
        <Row>
          {this.renderBtn('White Blood Cells')}
          {this.renderBtn('Platelets')}
        </Row>
        <BloodGroup
          selectedValue = {bloodGroup}
          onValueChange={bloodGroup => this.setState({bloodGroup}) }
        />
        <Dropdown
          selectedValue={bloodUnit}
          onValueChange={bloodUnit => this.setState({bloodUnit})}
        >
          <Dropdown.Item label="Select Blood Unit" value="" />
          <Dropdown.Item label="1" value="1" />
          <Dropdown.Item label="2" value="2" />
          <Dropdown.Item label="3" value="3" />
        </Dropdown>

        <CheckBox
          title='Pick and Drop Facility for Donor'
          checked={this.state.checked}
          onPress={() => this.setState({checked: !this.state.checked})}
        />

        <Input icon='edit' width='100%' type='default' placeholder='Add note' onChangeText={ relation => this.setState({relation })} />

        <Button
          marginTop={10}
          title="Send Request"
          onClick={this.validateForm}
          variant='default'
          block='80%'
        />
      </MainView>
    )
  }
}
export default BloodRequest