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
        <Icon size={30} name={icon} />
        <Text>{key}</Text>
      </ProfileView>
      <Text>{value}</Text>
    </Wrapper>
    )
  }

  render() {
    return (
      <MainView>
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
