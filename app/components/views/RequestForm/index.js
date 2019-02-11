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

  static navigationOptions = { header: null }

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
    const bottomBtn = height - 240

    return (
      <MainView>
        <Button
          title="Confirm Location"
          onClick={this.validateForm}
          variant='default'
          block='80'

          top={bottomBtn}
        />
        <Map
          mapStyle={mapStyle}
          enableSearch={true}
          locationInfo={info => this.setState({info})}
          navigation={this.props.navigation}
        />
      </MainView>
    )
  }
}

export default withAuthenticator(RequestForm)