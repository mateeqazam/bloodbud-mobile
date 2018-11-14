/**
*
* RequestForm
*
*/

import React from 'react'
import { View } from 'react-native'
import Button from '../../widgets/Button'

import {
  MainView,
  Wrapper,
  Dropdown
} from './styles'

class RequestForm extends React.PureComponent {
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
          onClick={()=>console.log('request')}
          variant='default'
        />
      </MainView>
    )
  }
}

export default RequestForm
