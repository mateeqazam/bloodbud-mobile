/**
*
* RequestForm
*
*/

import React from 'react'
import { View, Dimensions } from 'react-native'
import Button from '../../widgets/Button'
import { createStackNavigator } from 'react-navigation'
import Input from '../../widgets/Input'
import BloodGroup from '../../widgets/BloodGroup'
import { withAuthenticator } from 'aws-amplify-react-native'

import Map from '../Map';

import {
  MainView,
  Wrapper,
  Dropdown
} from './styles'

class RequestForm extends React.PureComponent {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Blood Request Form',
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      bloodGroup: '',
      bloodUnit: ''
    }
  }

  validateForm = () => {
    const { info} = this.state
    if(info) return this.props.navigation.navigate('BloodRequest')
    return alert('Select Hospital before proceed')
  }

  render() {
    var {height} = Dimensions.get('window')
    const mapStyle = {
      height
    }
    const bottomBtn = height - 200
    const { bloodGroup, bloodUnit} = this.state
    return (
      <MainView>
        <Button
          title="Confirm Location"
          onClick={this.validateForm}
          variant='default'
          block='80%'
          top={bottomBtn}
        />
        <Map
          mapStyle={mapStyle}
          enableSearch={true}
          locationInfo={info => this.setState({info})}
          navigation={this.props.navigation}
        />

        <View>
          <Wrapper>
            <BloodGroup
              selectedValue = {bloodGroup}
              onValueChange={bloodGroup => this.setState({bloodGroup}) }
            />
          </Wrapper>
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
        </View>
      </MainView>
    )
  }
}

export default withAuthenticator(RequestForm)