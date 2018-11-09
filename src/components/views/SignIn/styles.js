import styled from 'styled-components';
import Text from '../../widgets/Text'

export const Logo = styled.Image`
  width: 100;
  height: 100;
`;


export const LogoWrap = styled.View`
  display: flex;
  flexDirection: row;
  justify-content: center;
`;



export const TextWrap = styled.View`
  display: flex;
  flexDirection: row-reverse;
`;


export const SocialButtons = styled.View`
  width: 100%;
  display: flex;
  flexDirection: row;
  justify-content: space-between;
`;

export const StyledView = styled.View`
  padding:10px;
`;

export const MainView = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
`;
