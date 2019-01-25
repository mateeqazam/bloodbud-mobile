/**
*
* RequestForm
*
*/

import React from 'react'
import { View } from 'react-native'
import Button from '../../widgets/Button'
import { createStackNavigator } from 'react-navigation'
import Input from '../../widgets/Input'
import BloodGroup from '../../widgets/BloodGroup'

import Map from '../Map';

import {
  MainView,
  Wrapper,
  Dropdown
} from './styles'

class RequestForm extends React.PureComponent {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Blood Request',
      headerLeft: (
        <Button
          onClick={()=>navigation.toggleDrawer()}
          icon='bars'
          iconColor='black'
        />
      ),
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
    // ask gender while requesting blood???
    // ask if any ride can be provided???
    const { bloodGroup, bloodUnit, relation, info} = this.state
    if(!bloodGroup) return alert('Select Group')
    if(!bloodUnit) return alert('Select blood unit')
    if(!relation) return alert('relation info is required')
    if(!info) return alert('select a location')

    alert(`you selected ${bloodGroup} blood group with ${bloodUnit} unit of blood, and relation info you shared is :  ${relation}, location you shared is : ${info} `)
  }

  render() {

    const mapStyle = {
      height: 250,
      position: 'relative',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    };
    const { bloodGroup, bloodUnit} = this.state
    return (
      <MainView>
        <Map
          mapStyle={mapStyle}
          enableSearch={true}
          locationInfo={info => this.setState({info})}
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

        <Button
          title="Request"
          onClick={this.validateForm}
          variant='default'
        />
      </MainView>
    )
  }
}
export default createStackNavigator({
  RequestForm,
})