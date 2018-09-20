import styled from 'styled-components';

export const ButtonWrapper = styled.View`
  alignItems: center;
  backgroundColor: #DDDDDD;
  backgroundColor: ${props => props.bgColor || 'black'};
  padding: 10px;
  borderRadius: 10px;
`;

export const Text = styled.Text`
  color: ${props => props.color || "white"};
`