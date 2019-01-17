// /**
// *
// * Map
// *
// */

// import React from 'react'
// import { StyleSheet } from 'react-native'
// import MapView, { PROVIDER_GOOGLE,Marker,Callout } from 'react-native-maps'
// import Geocoder from 'react-native-geocoder'

// import {
//   MainView
// } from './styles'

// class Map extends React.PureComponent {

//   constructor(props) {
//     super(props)
//     this.state = {
//       map: '',
//       region:{
//         latitude: 31.467589,
//         longitude: 74.306995,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421,},
//       markerPoint:{

//         latitude: 31.467589,
//         longitude: 74.306995,
//       }
//     }
//   }

//   render() {
//     const {mapStyle} = this.props
//     const styles = StyleSheet.create({
//       map: mapStyle
//     })

//     let obj = {
//       latitude: 31.467589,
//       longitude: 74.306995,
//       latitudeDelta: 0.0922,
//       longitudeDelta: 0.0421,
//     }
//     let obj2 = {
//       latitude: 31.467589,
//       longitude: 74.306995,
//     }

//     var mapStyle1 = [
//       {
//         "featureType": "poi.attraction",
//         "elementType": "geometry.fill",
//         "stylers": [
//           {
//             "color": "#ff3bec"
//           },
//           {
//             "visibility": "on"
//           }
//         ]
//       },
//       {
//         "featureType": "poi.business",
//         "elementType": "geometry.fill",
//         "stylers": [
//           {
//             "visibility": "on"
//           }
//         ]
//       },
//       {
//         "featureType": "poi.medical",
//         "elementType": "geometry.fill",
//         "stylers": [
//           {
//             "color": "#ff3b53"
//           },
//           {
//             "visibility": "on"
//           }
//         ]
//       },
//       {
//         "featureType": "poi.medical",
//         "elementType": "geometry.stroke",
//         "stylers": [
//           {
//             "weight": 2.5
//           }
//         ]
//       },
//       {
//         "featureType": "poi.park",
//         "elementType": "geometry.fill",
//         "stylers": [
//           {
//             "visibility": "on"
//           }
//         ]
//       },
//       {
//         "featureType": "poi.place_of_worship",
//         "elementType": "geometry.fill",
//         "stylers": [
//           {
//             "visibility": "on"
//           }
//         ]
//       },
//       {
//         "featureType": "poi.school",
//         "elementType": "geometry.fill",
//         "stylers": [
//           {
//             "visibility": "on"
//           }
//         ]
//       },
//       {
//         "featureType": "poi.sports_complex",
//         "elementType": "geometry.fill",
//         "stylers": [
//           {
//             "visibility": "on"
//           }
//         ]
//       }
//     ]

//       var region1 = {
//         latitude: 37.78825,
//         longitude: -122.4324,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421,
//       }
// let MY_KEY='AIzaSyB94Glgain12Qqgn9Vzj4nwkQiiFKWIqx8'

// Geocoder.fallbackToGoogle(MY_KEY);

// // use the lib as usual

//     return (
//       <MainView>
//       <MapView
//         apikey={MY_KEY}
//         provider={PROVIDER_GOOGLE}
//         style={ styles.map }
//         initialRegion={this.state.region}
//         showsTraffic={true}
//         showsMyLocationButton={true}
//         showsUserLocation={true}
//         zoomControlEnabled={true}
//         customMapStyle={mapStyle1}
//         ref={map => { this.setState({map}) }}
//         onPoiClick={e=>{
//           console.log('poi',e)
//         }}
//         onRegionChange={e=>{
//           let markerPoint = {
//             latitude:e.latitude,
//             longitude:e.longitude
//           }
//           this.setState({markerPoint})
//         }}
//       >
//       <Marker coordinate={this.state.markerPoint}
//       title={`${this.state.markerPoint.latitude}`}
//       onDragEnd={e=>console.log('chnage',e)}
//       >
// </Marker>
//       </MapView>
//     </MainView>
//     );
//   }
// }

// Map.propTypes = {

// };

// export default Map;
