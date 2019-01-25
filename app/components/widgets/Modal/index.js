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

  render() {
    const {modalVisible, toggleModal} = this.props
    console.log('modalVisible: ', modalVisible);
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={!!modalVisible}
          onRequestClose={()=>toggleModal(false)}>
          <ModalView>
            <ModalBody>
              <Input placeholder={`Update ${modalVisible}`} onChangeText={ relation => this.setState({relation })} />
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
                  onClick={()=>toggleModal(false)}
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
