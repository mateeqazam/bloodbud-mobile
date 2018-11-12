import styled from 'styled-components';

export const MainView = styled.View`
  background-color: #DDDDDD;
  flex:1;
`;

export const ProfileView = styled.View`
display: flex;
flex-direction:row;
`;

export const InfoView = styled.View`
  marginTop: 10px;
  paddingHorizontal:10px;
`;

export const Logo = styled.Image`
  marginTop: 10px;
  width: 50;
  height: 50;
  border-radius: 50;
`;

export const MainWrapper = styled.ScrollView`
  padding:10px;
  paddingTop:50px;
`;

export const Wrapper = styled.View`
  borderRadius:5px;
  marginTop:10px;
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  background-color: #fff;
  padding:10px;
`;