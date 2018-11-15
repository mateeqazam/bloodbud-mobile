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

class Map extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      map: ''
    }
  }

  render() {
    const {mapStyle} = this.props
    const styles = StyleSheet.create({
      map: mapStyle
    })
    
    let obj = {
      latitude: 31.467589,
      longitude: 74.306995,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
    let obj2 = {
      latitude: 31.467589,
      longitude: 74.306995,
    }

    return (
      <MainView>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={ styles.map }
        initialRegion={obj}
        ref={map => { this.setState({map}) }}
      >
      <Marker 
        draggable 
        coordinate={obj2}
        onDragEnd={(e) => {
          console.log('marker draged',e)
          // this.setState({ x: e.nativeEvent.coordinate})
        }}
      />
      </MapView>
    </MainView>
    );
  }
}

Map.propTypes = {

};

export default Map;
