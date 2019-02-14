/* eslint-disable import/prefer-default-export */
import styled, {css} from 'styled-components';

export const TextWrapper = styled.Text`
  font-size: ${props => (props.fontSize || props.theme.fontSize)};
  color: ${props => (props.color || props.fontColor || props.theme.colors.text)};
  ${props => !!props.marginTop && css`marginTop: ${props.marginTop}`};
  ${props => !!props.paddingVertical && css`paddingVertical: ${props.paddingVertical}`};
  ${props => !!props.borderBottomWidth && css`borderBottomWidth: ${props.borderBottomWidth}`};
  borderBottomColor:lightgray;
  ${props => !!props.backgroundColor && css`backgroundColor: ${props.backgroundColor}`};
  ${props => !!props.padding && css`padding: ${props.padding}`};
  ${props => !!props.margin && css`margin: ${props.margin}`};
  ${props => !!props.borderBottomWidth && css`borderBottomWidth: ${props.borderBottomWidth}`};
  ${props => !!props.fontWeight && css`fontWeight: ${props.fontWeight}`};
  ${props => !!props.textAlign && css`textAlign: ${props.textAlign}`};
  /* font-family: ${(props) => {
    if (props.fontWeight === 'light') return 'Segoeui-Light';
    if (props.fontWeight === 'semiLight') return 'Segoeui-SemiLight';
    if (props.fontWeight === 'normal') return 'Segoeui-Regular';
    if (props.fontWeight === 'semiBold') return 'Segoeui-SemiBold';
    if (props.fontWeight === 'bold') return 'Segoeui-Bold';
    return 'Segoeui-Regular';
  }} */
`;
