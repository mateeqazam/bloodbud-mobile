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
  marginTop:35px;
  justifyContent: space-around;
  flex-direction:row;
`

export const Wrap = styled.View`
  alignItems: center;
`


export const Wrapper = styled.TouchableOpacity`
	flex-direction: row;
	paddingVertical: 10;
	borderBottomWidth:1px;
	borderBottomColor:lightgray;
`

export const InfoView = styled.View`
  paddingHorizontal: 15px;
`