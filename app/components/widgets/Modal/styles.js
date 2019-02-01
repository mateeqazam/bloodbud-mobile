import styled, {css} from 'styled-components'

export const ModalView = styled.View`
  flex:1;
  alignItems: center;
  justifyContent: center;
`

export const ModalBody = styled.View`
  backgroundColor: white;
  padding: 20px;
  alignItems: center;
  borderRadius:10;
`

export const Buttons = styled.View`
  flexDirection: row;
`

export const CrossCon = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  top: 13;
  zIndex: 2;
`