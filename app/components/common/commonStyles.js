import styled, {css} from 'styled-components'
import {
  IS_IPHONE_X,
  LIGHT_GREY,
  deviceWidth,
} from '../common/utility'

export const ViewMargin = styled.View`
  ${props => props.marginBottom && css`marginBottom: ${props.marginBottom}`};
  ${props => props.marginTop && css`marginTop: ${props.marginTop}`};
  ${props => props.marginLeft && css`marginLeft: ${props.marginLeft}`};
  ${props => props.marginRight && css`marginRight: ${props.marginRight}`};
  ${props => props.alignItems && css`alignItems: ${props.alignItems}`};
`

export const ViewPadding = styled.View`
  ${props => props.paddingBottom && css`paddingBottom: ${props.paddingBottom}`};
  ${props => props.paddingTop && css`paddingTop: ${props.paddingTop}`};
  ${props => props.paddingLeft && css`paddingLeft: ${props.paddingLeft}`};
  ${props => props.paddingRight && css`paddingRight: ${props.paddingRight}`};
  ${props => props.alignItems && css`alignItems: ${props.alignItems}`};
`

export const ViewPosition = styled.View`
  ${props => props.position && css`position: ${props.position}`};
  ${props => props.marginTop && css`marginTop: ${props.marginTop}`};
`

export const FlexRow = styled.View`
  flexDirection: row;
  ${props => props.flexWrap && css`flexWrap: ${props.flexWrap}`};
  ${props => props.marginTop && css`marginTop: ${props.marginTop}`};
  ${props => props.marginLeft && css`marginLeft: ${props.marginLeft}`};
  ${props => props.marginRight && css`marginRight: ${props.marginRight}`};
`

export const FlexOne = styled.View`
  flex: 1;
  ${props => props.paddingTop && css`paddingTop: ${props.paddingTop}`};
`

export const FlexRowAndCenter = styled.View`
  ${props => props.marginTop && css`marginTop: ${props.marginTop}`};
  ${props => props.justifyContent && css`justifyContent: ${props.justifyContent}`};
  flexDirection: row;
  alignItems: center;
`

export const PageMainCon = styled.View`
  flex: 1;
  paddingTop: ${IS_IPHONE_X ? 95 : 75};
`

export const MainHeaderStyle = styled.View`
  paddingTop: ${IS_IPHONE_X ? 47 : 27};
  backgroundColor: transparent;
  position: absolute;
  width: ${deviceWidth};
  zIndex: 3;
  top: 0;
`

export const PageWidth = styled.View`
  ${props => props.flex && css`flex: ${props.flex}`};
  paddingLeft: 24;
  paddingRight: 24;
`

export const PageGreyCon = styled.View`
  paddingTop: ${props=>props.paddingTop ? props.paddingTop : 30};
  paddingBottom: 55;
  backgroundColor: ${LIGHT_GREY};
  flex: 1;
`

export const AlignCenter = styled.View`
  alignItems: center;
  ${props => props.marginTop && css`marginTop: ${props.marginTop}`};
  ${props => props.paddingBottom && css`paddingBottom: ${props.paddingBottom}`};
`

export const AlignSelf = styled.View`
  alignSelf: center;
  ${props => props.marginTop && css`marginTop: ${props.marginTop}`};
`

export const LineImage = styled.Image`
  position: absolute;
  width: ${deviceWidth};
  left: 0;
  top: 35;
`

export const MainImgBg = styled.Image`
  height: ${props=>props.height ? props.height : 30};
	position: absolute;
	top: 0;
	width: ${deviceWidth};
`