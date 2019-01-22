/**
*
* Map
*
*/

import React from 'react'
import { StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps'

import {
  MainView
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
        this.getLocationDetails(position.coords.latitude,position.coords.longitude)
      },
      (error) => { console.log(error); },
      {  enableHighAccuracy: true,timeout: 30000 }
    )
  }

  getLocationDetails(latitude, longitude) {
    let location = [];
    url='https://maps.googleapis.com/maps/api/geocode/json?address='+ latitude + ',' +longitude + '&key=' +  googleApiKey
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log('responseJson: ', responseJson);
    });
  }

  render() {
    const {mapStyle} = this.props
    const styles = StyleSheet.create({
      map: mapStyle
    })

    var mapStyle1 = [
      {
        "featureType": "poi.attraction",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ff3bec"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.medical",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ff3b53"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.medical",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "weight": 2.5
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.place_of_worship",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.school",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi.sports_complex",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      }
    ]

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
        customMapStyle={mapStyle1}
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
        onRegionChangeComplete={e=>this.getLocationDetails(e.latitude,e.longitude)}
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
