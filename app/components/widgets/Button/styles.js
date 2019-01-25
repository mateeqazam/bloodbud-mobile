import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.View`
  flex-direction: row;
  backgroundColor: ${props => props.bgColor || 'transparent'};
  padding: 10px;
  ${props => !!props.marginLeft && css`marginLeft: ${props.marginLeft}`};
  borderRadius: 5px;
  justify-content: center;
`

export const TouchableOpacity = styled.TouchableOpacity`
  paddingVertical: 10;
  ${props => !!props.block && css`width: ${props.block}`};
`

export const Text = styled.Text`
  color: ${props => props.color || "black"};
`