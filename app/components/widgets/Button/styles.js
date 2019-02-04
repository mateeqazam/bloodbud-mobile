import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
  alignItems: center;
  borderRadius: 5px;
  backgroundColor: ${props => props.bgColor || 'transparent'};
  ${props => !!props.marginLeft && css`marginLeft: ${props.marginLeft}`};
  ${props => !!props.top && css`top: ${props.top}`};
  ${props => !!props.block && css`width: ${props.block}`};
  ${props => !props.noCenter && css`justifyContent: center`};
`

export const Wrapper = styled.View`
  zIndex:1;
  alignItems: center;
`

export const Text = styled.Text`
  color: ${props => props.color || "black"};
`