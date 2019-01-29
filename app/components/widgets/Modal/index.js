/**
*
* Modal
*
*/

import React from 'react';

import {Modal, View} from 'react-native'
import { ModalView, ModalBody, Buttons } from './styles';
import Input from '../Input'
import Button from '../Button'

class customModal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  render() {
    const {modalVisible, toggleModal} = this.props
    const {text} = this.state
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={!!modalVisible}
          onRequestClose={()=>toggleModal(false)}>
          <ModalView>
            <ModalBody>
              <Input placeholder={'Update Value'} onChangeText={ text => this.setState({text})} />
              <Buttons>
                <Button
                  variant='grey'
                  bgColor='transparent'
                  title='Cancel'
                  onClick={()=>toggleModal(false)}
                />
                <Button
                  variant='grey'
                  bgColor='transparent'
                  title='Update'
                  onClick={()=>toggleModal(false,text)}
                />
              </Buttons>
            </ModalBody>
          </ModalView>
        </Modal>
      </View>
    );
  }
}

export default customModal;
