import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.View`
  alignItems: center;
  backgroundColor: #DDDDDD;
  backgroundColor: ${props => props.bgColor || 'black'};
  padding: 10px;
  borderRadius: 8px;
`;



export const TouchableOpacity = styled.TouchableOpacity`
  padding: 10px;
  ${props => !!props.block && css`width: 100%`};
`

export const Text = styled.Text`
  color: ${props => props.color || "white"};
`