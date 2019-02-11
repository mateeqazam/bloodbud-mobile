import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
  alignItems: center;
  borderRadius: 5px;
  backgroundColor: ${props => props.bgColor || 'transparent'};
  ${props => !!props.marginLeft && css`marginLeft: ${props.marginLeft}`};
  ${props => !!props.block && css`width: ${props.block}`};
  ${props => !props.noCenter && css`justifyContent: center`};
`

export const Wrapper = styled.View`
  ${props => !!props.top && css`position:absolute;`};
  ${props => !!props.top && css`top: ${props.top}`};
  alignItems: center;
  left: 0;
  right: 0;
  zIndex:1;
`

export const Text = styled.Text`
  color: ${props => props.color || "black"};
`