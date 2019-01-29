import {
  Dimensions
} from 'react-native'

export const BLACK = '#000000'
export const BLACK_EIGHTY = '#323232'
export const BLACK_FIVE = '#F2F2F2'
export const BLACK_SIX = '#F5F5F5'
export const WHITE = '#FFFFFF'
export const GREY = '#6A6A6A'
export const DARK_GREY = '#424141'
export const LIGHT_GREY = '#F7F7F7'
export const SILVER = '#BBBBBB'
export const GOLDEN = '#EEB111'

export const MUSTARD = 'Mustard'
export const COFFEE = 'Coffee'
export const WRINKLE = 'wrinkle'
export const IDLE = 'Idle'

export const deviceWidth = Dimensions.get('window').width
export const deviceHeight = Dimensions.get('window').height
export const IS_IPHONE_X = deviceHeight == 812 || deviceHeight == 896

export function round(value){
  return Math.round(value * 100) / 100
}

export function cleanRichText(richText) {
  return richText.replace(/<\/?[^>]+(>|$)/g, '')
}

export function getTitlizeStrig(val){
  return val.charAt(0).toUpperCase()+val.substr(1)
}