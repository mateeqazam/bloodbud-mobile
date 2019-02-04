/**
*
* Map
*
*/

import React from 'react'
import { StyleSheet, AsyncStorage } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker, AnimatedRegion, Animated } from 'react-native-maps'
import Button from '../../widgets/Button'

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
        const location = `${position.coords.latitude},${position.coords.longitude}`
        this.getLocationDetails(location)
        this._storeData('lastLocation',location)
      },
      error => {
        // this._retrieveData('lastLocation')
        console.log('current location fetch error: ',error)
      },
      { enableHighAccuracy: true, timeout: 30000 }
    )
  }

  getLocationDetails(location) {
    url=`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${googleApiKey}`
    fetch(url)
    .then((response) => response.json())
    .then((resp) => {
      if(resp && resp.results && resp.results[0]){
        this.setLocation(resp.results[0])
      }
    });
  }

  _storeData = async (key,data) => {
    try {
      data = JSON.stringify(data)
      await AsyncStorage.setItem(key, data)
    } catch (e) {
      console.log('Error saving data: ', e)
    }
  }

  _retrieveData = async (key) => {
    try {
      let value = await AsyncStorage.getItem(key);
      value = JSON.parse(value)
    } catch (e) {
      console.log('Error retrieving data: ', e);
    }
  }

  setLocation = (location) => {
    let loc = location.geometry.location
    loc.title = location.formatted_address
    console.log('loc: ', loc);
    this.props.locationInfo(loc.title)
    const point = {
      latitude:loc.lat,
      longitude:loc.lng,
      title:loc.title,
      latitudeDelta,
      longitudeDelta,
    }
    // this._storeData(location)

    const region = new AnimatedRegion(point)
    this.setState({region, markerPoint: point, regionChanged: true})
  }

  onRegionChange = point => {
    if(this.state.regionChanged) return this.setState({regionChanged: false})
    const region = new AnimatedRegion(point)
    // this.setState({markerPoint: point, region })
  }

  getPoint = point => {
    this.getLocationDetails( `${point.latitude},${point.longitude}` )
  }

  componentWillReceiveProps(props){
    const {navigation: {state: { params }}} = props;
    if(params && params.selectedLocation){
      const {selectedLocation} = params
      this.setLocation(selectedLocation)
    }
  }

  render() {
    const { mapStyle, enableSearch } = this.props
    const styles = StyleSheet.create({
      map: mapStyle
    })
    const {region, markerPoint} = this.state

    return (
      <MainView>
        {enableSearch && <Button
          title='Search Hospital'
          onClick={()=>this.props.navigation.navigate('SearchLocation')}
          variant='map'
          icon='search'
          iconColor='black'
          block='80%'
          top={60}
          noCenter={true}
        />}

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