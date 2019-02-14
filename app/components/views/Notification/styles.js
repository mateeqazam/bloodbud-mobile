import styled, {css} from 'styled-components';

export const Pic = styled.Image`
  width: 50;
  height: 50;
  border-radius: 50;
  marginTop:35px;
  `

export const Container = styled.ScrollView`
  flex:1;
  backgroundColor:white;
	${props => !!props.paddingHorizontal && css`paddingHorizontal: ${props.paddingHorizontal}`};

`

export const Btns = styled.View`
  marginTop:30px;
  justifyContent: space-around;
  flex-direction:row;
`
export const Row = styled.TouchableOpacity`
flex-direction:row;
justifyContent: space-between;
`

export const Wrapper = styled.TouchableOpacity`
	flex-direction: row;
  paddingVertical: 10px;
  paddingHorizontal: 4px;
  borderBottomWidth:1px;
  borderBottomColor:lightgray;
`

export const Wrap = styled.View`
  paddingVertical:20px;
  justifyContent: space-between;
  flex-direction:row;
	borderBottomWidth:1px;
  borderBottomColor:lightgray;

`

export const InfoView = styled.TouchableOpacity`
  marginRight: 80;
  paddingHorizontal: 15px;
`