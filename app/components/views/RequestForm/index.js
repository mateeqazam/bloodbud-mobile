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
      locationSearch:''
    }
  }

  onLocationChange = locationSearch => {
    this.setState({locationSearch})
  }


  getLocationDetails = () => {
    const googleApiKey = 'AIzaSyB94Glgain12Qqgn9Vzj4nwkQiiFKWIqx8'
    const loc = this.state.locationSearch
    if(!loc) return false
    const url=`https://maps.googleapis.com/maps/api/geocode/json?address=${loc}&key=${googleApiKey}`
    console.log('url: ', url);
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log('responseJson: ', responseJson);
    });
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

    return (
      <MainView>
        <Input type='default' placeholder='Search Location' onChangeText={this.onLocationChange} />

        <Button
          title='Search1'
          onClick={this.getLocationDetails}
          variant='grey'
        />
        {<Map mapStyle={mapStyle} />}
        <View>
          <Wrapper>
          <Dropdown
          style={{ height: 50, width: '100%' }}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
            <Dropdown.Item label="Select Blood Group" value="" />
            <Dropdown.Item label="Java" value="java" />
          </Dropdown>
          </Wrapper>
          <Wrapper>
          <Dropdown
          selectedValue={"Java"}
          style={{ height: 50, width: '100%' }}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
            <Dropdown.Item label="Select Blood Type" value="" />
            <Dropdown.Item label="Java" value="java" />
          </Dropdown>
          </Wrapper>
          <Wrapper>
          <Dropdown
          selectedValue={"Java"}
          style={{ height: 50, width: '100%' }}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
            <Dropdown.Item label="Select Blood Unit" value="" />
            <Dropdown.Item label="JavaScript" value="js" />
          </Dropdown>
          <Wrapper>
          </Wrapper>
          <Dropdown
          selectedValue={"Java"}
          style={{ height: 50, width: '100%' }}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
            <Dropdown.Item label="Relation with needy person" value="" />
            <Dropdown.Item label="Java" value="java" />
          </Dropdown>
          </Wrapper>

        </View>

        <Button
          title="Request"
          onClick={()=>this.props.navigation.navigate('BloodRequest')}
          variant='default'
        />
      </MainView>
    )
  }
}
export default createStackNavigator({
  RequestForm,
})