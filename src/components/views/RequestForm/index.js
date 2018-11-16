/**
*
* RequestForm
*
*/

import React from 'react'
import { View } from 'react-native'
import Button from '../../widgets/Button'
import { createStackNavigator } from 'react-navigation'

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

  render() {
    return (
      <MainView>
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
          onClick={()=>this.props.navigation.navigate('BloodGroup')}
          variant='default'
        />
      </MainView>
    )
  }
}
export default createStackNavigator({
  RequestForm,
})