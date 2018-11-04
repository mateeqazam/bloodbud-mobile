/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const TextWrapper = styled.Text`
  font-size: ${props => (props.fontSize || props.theme.fontSize)};
  color: ${props => (props.color || props.fontColor || props.theme.colors.text)};

  font-family: ${(props) => {
    if (props.fontWeight === 'normal') return 'Segoeui-Regular';
    if (props.fontWeight === 'light') return 'Segoeui-Light';
    if (props.fontWeight === 'semiLight') return 'Segoeui-SemiLight';
    if (props.fontWeight === 'italic') return 'Segoeui-Italic';
    if (props.fontWeight === 'semiBold') return 'Segoeui-Semibold';
    if (props.fontWeight === 'bold') return 'Segoeui-Bold';
    return 'Segoeui-Regular';
  }}
`;
