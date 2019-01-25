/**
*
* Profile
*
*/

import React from 'react';
import { Alert, Picker } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker'
import Button from '../../widgets/Button'
import Icon from '../../widgets/Icon'
import Text from '../../widgets/Text'
import Input from '../../widgets/Input'
import BloodGroup from '../../widgets/BloodGroup'
import Modal from '../../widgets/Modal'
import Slider from "react-native-slider";

import {
  Container,
  Pic,
  Wrap,
  InfoView,
  Wrapper
} from './styles'

import { withAuthenticator } from 'aws-amplify-react-native'
import { Auth } from 'aws-amplify'

class Profile extends React.PureComponent {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <Text fontSize={16} color="black" fontWeight='bold'>Profile</Text>,
      headerLeft: (
        <Button
          marginLeft={9}
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
      bloodDonated: '',
      calendar: false,
      range: 20,
      modalVisible: false,
      gender: ''
    }
  }

  showElement(key,value,icon){
    return (
      <Wrapper onPress={()=>{
          if(icon === 'calendar') return this.setState({[icon]: true})
          this.setState({modalVisible: key})
        }}>
        <Icon fontSize={22} name={icon} />
        <InfoView>
          <Text fontWeight='bold'>{key}</Text>
          <Text>{value}</Text>
        </InfoView>
      </Wrapper>
    )
  }
  
  _showDateTimePicker = () => this.setState({ calendar: true });
  _hideDateTimePicker = () => this.setState({ calendar: false });
  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
  };

  toggleModal = modalVisible => {
    this.setState({modalVisible})
  }

  render() {
    const { bloodGroup, gender, bloodDonated, calendar, range, modalVisible } = this.state
    return (
      <Container>

        {this.showElement('Name','Ali','user')}
        {this.showElement('Email','ali@gmail.com','envelope')}
        {this.showElement('Phone Number','090078601','phone')}
        {this.showElement('Password','******','lock')}
        {this.showElement('Date of Birth','9 June 1993','calendar')}

        <Text>{`Maximum Distance : ${range}km `}</Text>
        <Slider
          minimumValue={5}
          step={1}
          value={20}
          maximumValue={100}
          onValueChange={range => this.setState({range})}
        />

        <BloodGroup
          selectedValue = {bloodGroup}
          onValueChange={bloodGroup => this.setState({bloodGroup})}
        />

        <Picker
          selectedValue = {gender}
          onValueChange={gender => this.setState({gender})}>
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
        </Picker>

        <Picker
          selectedValue = {bloodDonated}
          onValueChange={bloodDonated => this.setState({bloodDonated})}>
          <Picker.Item label="Last time Blood Donated" value="" />
          <Picker.Item label="Less than 3 Month ago" value={1} />
          <Picker.Item label="More than 3 Month ago" value={0} />
        </Picker>

        <Button
          variant='grey'
          bgColor='transparent'
          title='Sign out'
          onClick={() => {
            Auth.signOut().then(() => {
              this.props.onStateChange('signIn',{})
            })
          }}
        />

        <DateTimePicker
          datePickerModeAndroid='spinner'
          isVisible={calendar}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
        <Modal
          toggleModal={this.toggleModal}
          modalVisible={modalVisible}
        />

      </Container>
    );
  }
}

export default withAuthenticator(Profile)