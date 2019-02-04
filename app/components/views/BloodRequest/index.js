/**
*
* BloodRequest
*
*/

import React from 'react';
import { View } from 'react-native';
// import PropTypes from 'prop-types';
import Text from '../../widgets/Text'
import Button from '../../widgets/Button'
import Input from '../../widgets/Input'
import BloodGroup from '../../widgets/BloodGroup'

import {
  MainView,
  Wrapper,
  Dropdown,
} from './styles';

class BloodRequest extends React.PureComponent {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Request',
      onBackPress: () => navigation.pop(),
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      bloodGroup: '',
      bloodUnit: ''
    }
  }

  render() {
    const {bloodGroup,bloodUnit} = this.state

    return (
      <MainView>
          <BloodGroup
          selectedValue = {bloodGroup}
          onValueChange={bloodGroup => this.setState({bloodGroup}) }
          />
        <Wrapper>
        <Dropdown
        selectedValue={bloodUnit}
        style={{ height: 50, width: '100%' }}
        onValueChange={bloodUnit => this.setState({bloodUnit})}
        >
        <Dropdown.Item label="Select Blood Unit" value="" />
        <Dropdown.Item label="1" value="1" />
        <Dropdown.Item label="2" value="2" />
        <Dropdown.Item label="3" value="3" />
        </Dropdown>
        </Wrapper>
        <Wrapper>
        <Input type='default' placeholder='Relation with needy person' onChangeText={ relation => this.setState({relation })} />
        </Wrapper>
      </MainView>
    )
  }
}
export default BloodRequest