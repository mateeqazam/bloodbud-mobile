import styled from 'styled-components';

export const InputFieldWrapper = styled.View`
  width: 90%;
  align-self: center;
`;

export const TextInputWrapper = styled.View`
  display: flex;
  flex-direction: row;
  border-bottom-width: 1;
  border-bottom-color: ${(props) => {
    if (props.isFieldFocused) return 'black';
    if (!props.status) return props.theme.colors.danger;
    return props.theme.colors.gray;
  }};
`;

export const IconWrapper = styled.View`
  flex: 0.06;
  display: flex;
  align-items: center;
`;

export const StyledTextInput = styled.TextInput`
  flex: 1;
  display: flex;
  align-items: center;
`;
