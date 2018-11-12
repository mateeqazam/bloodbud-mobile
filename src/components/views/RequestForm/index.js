/**
*
* RequestForm
*
*/

import React from 'react';
import { View, Text} from 'react-native';
import Button from '../../widgets/Button'

import {
  MainView,
  Dropdown
} from './styles';

class RequestForm extends React.PureComponent {
  render() {
    return (
      <MainView>
        <View>
        <Text>RequestForm</Text>
          <Dropdown
          style={{ height: 50, width: '100%' }}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
            <Dropdown.Item label="Select Blood Group" value="" />
            <Dropdown.Item label="Java" value="java" />
          </Dropdown>
          <Dropdown
          selectedValue={"Java"}
          style={{ height: 50, width: '100%' }}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
            <Dropdown.Item label="Select Blood Type" value="" />
            <Dropdown.Item label="Java" value="java" />
          </Dropdown>
          <Dropdown
          selectedValue={"Java"}
          style={{ height: 50, width: '100%' }}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
            <Dropdown.Item label="Select Blood Unit" value="" />
            <Dropdown.Item label="JavaScript" value="js" />
          </Dropdown>
          <Dropdown
          selectedValue={"Java"}
          style={{ height: 50, width: '100%' }}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
            <Dropdown.Item label="Relation with needy person" value="" />
            <Dropdown.Item label="Java" value="java" />
          </Dropdown>

        </View>

        <Button 
          title="Request"
          onClick={()=>console.log('request')}
          variant='default'
        />
      </MainView>
    );
  }
}

RequestForm.propTypes = {

};

export default RequestForm;
