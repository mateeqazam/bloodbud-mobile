import styled from 'styled-components';
import Icon from '../Icon';

export const InputFieldWrapper = styled.View`
  width: 100%;
  marginVertical:${props => (props.marginVertical || 10)};
  display: flex;
  flexDirection: row;
  borderBottomWidth: 1;
  padding: 10px;
  ${''}
`;

export const InputWrapper = styled.TextInput` 
  paddingLeft: 10px;
  flex: 1;
  display: flex;
  color: ${props => (props.textcolor || props.theme.colors.text)};
  height: ${props => (props.height || 24)};
  letterSpacing: ${props => (props.letterSpacing || 0)};  
  borderBottomColor: ${props => (props.status ? props.theme.colors.gray : props.theme.colors.danger)};
  borderBottomWidth:  ${props => (props.borderBottomWidth || 0)}; 
`;
// fontSize: ${props => (props.fontSize || props.theme.fontSize)};
// fontFamily: ${props => (props.fontFamilyLabel || props.theme.fontFamily)};


export const StyledIcon = styled(Icon)`
  marginRight: 8;
  marginTop:5;
  width: ${props => (props.imagewidth || 16)};
  height: ${props => (props.imageheight || 16)};
  tintColor: ${props => (props.tintColor || props.theme.colors.gray)};
`;
