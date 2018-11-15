/**
*
* Settings
*
*/

import React from 'react';
import { View} from 'react-native';
// import PropTypes from 'prop-types';
import Text from '../../widgets/Text'
import Button from '../../widgets/Button'
import Icon from '../../widgets/Icon'
import Map from '../Map'

import {
  MainView,
  ProfileView,
  Wrapper
} from './styles';

class Settings extends React.PureComponent {

  showElement(key,value,icon){
    return (
      <Wrapper>
      <ProfileView>
        <Icon name={icon} />
        <Text>{`  ${key}`}</Text>
      </ProfileView>
      <Text>{value}</Text>
    </Wrapper>
    )
  }

  render() {
    let mapStyle = {
      height:250,
      position: 'relative',
      top: 10,
      left: 0,
      right: 0,
      bottom: 0
    }

    return (
      <MainView>
        <Map mapStyle={mapStyle} />
        {this.showElement('Name','Ali','user')}
        {this.showElement('Email','ali@gmail.com','envelope')}
        {this.showElement('Phone Number','090078601','phone')}
        {this.showElement('Change Password','*****','lock')}
      </MainView>
    );
  }
}

Settings.propTypes = {

};

export default Settings;
