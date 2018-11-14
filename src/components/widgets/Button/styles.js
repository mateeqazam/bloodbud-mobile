import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.View`
  flex-direction: row;
  backgroundColor: ${props => props.bgColor || '#DDDDDD'};
  padding: 10px;
  borderRadius: 5px;
  justify-content: center;
`;



export const TouchableOpacity = styled.TouchableOpacity`
  padding-vertical: 10px;
  ${props => !!props.block && css`width: ${props.block}`};
`

export const Text = styled.Text`
  color: ${props => props.color || "white"};
`