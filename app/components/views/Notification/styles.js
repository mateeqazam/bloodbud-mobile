import styled from 'styled-components';

export const Pic = styled.Image`
  width: 50;
  height: 50;
  border-radius: 50;
  marginTop:35px;
  `

export const Container = styled.ScrollView`
  flex:1;
  backgroundColor:white;
  padding:10px;
`

export const Btns = styled.View`
  marginTop:30px;
  justifyContent: space-around;
  flex-direction:row;
`

export const Wrapper = styled.TouchableOpacity`
	flex-direction: row;
	paddingVertical: 10;
	borderBottomWidth:1px;
  borderBottomColor:lightgray;
`

export const Wrap = styled.TouchableOpacity`
  paddingVertical:20px;
  justifyContent: space-between;
  flex-direction:row;
	borderBottomWidth:1px;
  borderBottomColor:lightgray;

`

export const InfoView = styled.View`
  marginRight: 80;
  paddingHorizontal: 15px;
`