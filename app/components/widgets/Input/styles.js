import styled, { css } from 'styled-components';
import Icon from '../Icon';

export const InputFieldWrapper = styled.View`
	${props => !!props.marginVertical && css`marginVertical: ${props.marginVertical}`};
	borderBottomWidth: 1;
`

export const InputWrapper = styled.TextInput` 
  ${props => !!props.height && css`height: ${props.height}`};
  fontSize: ${props => (props.fontSize || 13)};
`
// fontFamily: ${props => (props.fontFamilyLabel || props.theme.fontFamily)};
// display: flex;
// color: black;
// fontSize: 50;
// letterSpacing: ${props => (props.letterSpacing || 0)};  
// borderBottomColor: ${props => (props.status ? props.theme.colors.gray : props.theme.colors.danger)};
// borderBottomWidth:  ${props => (props.borderBottomWidth || 0)}; 

export const StyledIcon = styled(Icon)`
  marginRight: 8;
  marginTop:5;
  width: ${props => (props.imagewidth || 16)};
  height: ${props => (props.imageheight || 16)};
  tintColor: ${props => (props.tintColor || props.theme.colors.gray)};
`
