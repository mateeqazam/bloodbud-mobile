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
          onClick={()=>{}}
          icon='bars'
          iconColor='black'
        />
      ),
    }
  }

  constructor(props) {
    super(props)
    let {user} = Auth
    Auth.currentAuthenticatedUser({ bypassCache: true }).then((v)=>{
      console.log('v: ', v);
    })
    let {attributes} = user

    this.state = {
      bloodGroup: '',
      bloodDonated: '',
      calendar: false,
      range: 20,
      modalVisible: false,
      gender: '',
      nickname:attributes.nickname,
      email:attributes.email,
      phone_number:attributes.phone_number,
      birthdate:attributes.birthdate,
    }
  }


  showElement(key,icon,attribute){
    let val = this.state[attribute] || ''
    val = key === 'Password' ? '******' : val
    return (
      <Wrapper onPress={()=>{
          if(icon === 'calendar') return this.setState({[icon]: true, modalVisible: attribute})
          this.setState({modalVisible: attribute})
        }}>
        <Icon fontSize={22} name={icon} />
        <InfoView>
          <Text>{key}</Text>
          <Text>{val}</Text>
        </InfoView>
      </Wrapper>
    )
  }
  
  _showDateTimePicker = () => this.setState({ calendar: true });
  _hideDateTimePicker = () => this.setState({ calendar: false });
  _handleDatePicked = date => {
    let dd = date.getDate();
    let mm = date.getMonth()+1; 
    let yyyy = date.getFullYear()
    const birthdate = (dd<10?'0'+dd:dd)+'-'+(mm<10?'0'+mm:mm)+'-'+yyyy
    this.setState({birthdate})
    this.toggleModal(false,birthdate)
    this._hideDateTimePicker();
  }

  toggleModal = async (modalVisible, text = '') => {
    let key = this.state.modalVisible
    if(text && key) {
      this.setState({[key]:text})

      const user = await Auth.currentAuthenticatedUser()
      console.log('user: ', user);
      console.log('key, text: ', key, text);

      Auth.updateUserAttributes(user, {
        [key]: text
        // 'custom:attached_device': text
        }).then(result => {
          console.log('updateUserAttributes', result);
        }).catch(err => {
          console.log('error is aws update user  ',err)
        })

    }
    this.setState({modalVisible})
  }


  render() {
    const { bloodGroup, gender, bloodDonated, calendar, range, modalVisible } = this.state
    return (
      <Container>

        {this.showElement('Name','user','nickname')}
        {this.showElement('Email','envelope','email')}
        {this.showElement('Phone Number','phone','phone_number')}
        {this.showElement('Password','lock','password')}
        {this.showElement('Date of Birth','calendar','birthdate')}

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
          date={new Date(631134000000)}
          minimumDate={new Date(31518000000)}
          maximumDate={new Date(1009825200000)}
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