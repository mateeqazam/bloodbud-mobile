/**
*
* Map
*
*/

import React from 'react'
import { StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps'

import {
  MainView,
  customMapStyle
} from './styles'

const googleApiKey = 'AIzaSyB94Glgain12Qqgn9Vzj4nwkQiiFKWIqx8'

class Map extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0121
        }
        this.setState({region, markerPoint: region})
        const location = `${position.coords.latitude},${position.coords.longitude}`
        this.getLocationDetails(location)
      },
      (error) => { console.log(error); },
      {  enableHighAccuracy: true,timeout: 30000 }
    )
  }

  getLocationDetails(location) {
    url=`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${googleApiKey}`
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log('responseJson: ', responseJson);
    });
  }

  render() {
    const {mapStyle,locationSearch} = this.props
    const styles = StyleSheet.create({
      map: mapStyle
    })

    const {region} = this.state
    return (
      <MainView>
      { region && <MapView
        apikey={googleApiKey}
        provider={PROVIDER_GOOGLE}
        style={ styles.map }
        initialRegion={this.state.region}
        showsTraffic={true}
        showsMyLocationButton={true}
        showsUserLocation={true}
        zoomControlEnabled={true}
        zoomEnabled = {true}
        customMapStyle={customMapStyle}
        ref={map => { this.setState({map}) }}
        onPoiClick={e=>{
          console.log('poi',e)
        }}
        onRegionChange={e=>{
          let markerPoint = {
            latitude:e.latitude,
            longitude:e.longitude
          }
          this.setState({markerPoint})
        }}
        onRegionChangeComplete={e=>{
          const location = `${e.latitude} , ${e.longitude}`
          this.getLocationDetails(location)
        }}
      >
      <Marker coordinate={this.state.markerPoint}
      title={`${this.state.markerPoint.latitude}`}
      onDragEnd={e=>console.log('chnage',e)}
      >
</Marker>
      </MapView>}
    </MainView>
    );
  }
}

export default Map;
