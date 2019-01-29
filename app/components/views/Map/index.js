/**
*
* Map
*
*/

import React from 'react'
import { StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker, AnimatedRegion, Animated } from 'react-native-maps'

import Button from '../../widgets/Button'
import Input from '../../widgets/Input'

import {
  MainView,
  customMapStyle
} from './styles'

const googleApiKey = 'AIzaSyB94Glgain12Qqgn9Vzj4nwkQiiFKWIqx8'

const latitudeDelta = 0.0122
const longitudeDelta = 0.0121

class Map extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      locationSearch:''
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const region = new AnimatedRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta,
          longitudeDelta
        })
        this.setState({region , markerPoint: position.coords})
        const location = `${position.coords.latitude},${position.coords.longitude}`
        this.getLocationDetails(location)
      },
      error => { console.log('current location fetch error: ',error) },
      { enableHighAccuracy: true, timeout: 30000 }
    )
  }

  getLocationDetails(location) {
    url=`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${googleApiKey}`
    fetch(url)
    .then((response) => response.json())
    .then((resp) => {
      if(resp && resp.results && resp.results[0]){
        let loc = resp.results[0].geometry.location
        loc.title = resp.results[0].formatted_address
        this.props.locationInfo(loc.title)
        const point = {
          latitude:loc.lat,
          longitude:loc.lng,
          title:loc.title,
          latitudeDelta,
          longitudeDelta,
        }
        const region = new AnimatedRegion(point)
        this.setState({region, markerPoint: point, regionChanged: true})
      }
    });
  }

  onRegionChange = point => {
    if(this.state.regionChanged) return this.setState({regionChanged: false})
    const region = new AnimatedRegion(point)
    this.setState({markerPoint: point, region })
  }

  getPoint = point => {
    this.getLocationDetails( `${point.latitude},${point.longitude}` )
  }

  render() {
    const { mapStyle, enableSearch } = this.props
    const styles = StyleSheet.create({
      map: mapStyle
    })
    const {region, markerPoint, locationSearch} = this.state
    return (
      <MainView>
        <Animated
          region={region}
          customMapStyle={customMapStyle}
          style={ styles.map }
          onRegionChangeComplete={this.onRegionChange}
          onPoiClick={e => this.getPoint(e.nativeEvent.coordinate)}
        >
					{markerPoint && <Marker
              coordinate={markerPoint}
              draggable
              title={markerPoint.title || ''}
              onDragEnd={ e => this.getPoint(e.nativeEvent.coordinate) } 
					/>}
				</Animated>
			 </MainView>
    )
  }
}

export default Map