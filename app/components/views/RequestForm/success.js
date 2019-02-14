/**
*
* RequestForm
*
*/

import React from 'react'
import { View, Dimensions } from 'react-native'
import Button from '../../widgets/Button'
import Text from '../../widgets/Text'
import Icon from '../../widgets/Icon'

import {
  SuccessContainer,
} from './styles'

class FormSuccess extends React.PureComponent {

  static navigationOptions = { header: null }

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <SuccessContainer>
        <Icon color='#33CC66' marginTop={7} fontSize={82} name='checkCircle' />
        <Text fontSize={18} fontWeight='bold' marginTop={20}>Request Confirmed</Text>
        <Text fontSize={16} textAlign='center' marginTop={5}>You will be contacted when any donor found</Text>
        
        <Button
          variant='grey'
          marginTop={30}
          title='View Status'
          onClick={() => this.props.navigation.navigate('Notification')}
        />
      </SuccessContainer>
    )
  }
}


export default FormSuccess