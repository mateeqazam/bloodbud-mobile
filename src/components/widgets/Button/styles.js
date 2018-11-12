import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
  alignItems: center;
  backgroundColor: #DDDDDD;
  backgroundColor: ${props => props.bgColor || 'black'};
  padding: 10px;
  borderRadius: 8px;
  justify-content: center;
`;



export const TouchableOpacity = styled.TouchableOpacity`
  padding-vertical: 10px;
  ${props => !!props.block && css`width: ${props.block}`};
`

export const Text = styled.Text`
  color: ${props => props.color || "white"};
`