/**
*
* SearchLocation
*
*/

import React from 'react';
import { View, Text } from 'react-native';
// import PropTypes from 'prop-types';


import Button from '../../widgets/Button'
import Input from '../../widgets/Input'

const googleApiKey = 'AIzaSyB94Glgain12Qqgn9Vzj4nwkQiiFKWIqx8'

class SearchLocation extends React.Component {


  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Search Location',
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      locations:[]
    }
  }

  getLocationDetails = location => {
    const base_url = 'https://maps.googleapis.com/maps/api/'
    const placeId = "ChIJGZ5hhu4DGTkR88TG6XMM8h0"
    const url2 = `${base_url}place/details/json?placeid=${placeId}&key=${googleApiKey}`

    const url3=`${base_url}place/autocomplete/json?input=${location}%hospital&types=geocode&key=${googleApiKey}`

    const url=`${base_url}geocode/json?address=${location}&components=health&key=${googleApiKey}`

    
    fetch(url)
    .then(response => response.json())
    .then(locs => {
      console.log('locs: ', locs);
      // console.log('locations: ', locations);
      this.setState({locations: locs.results})
      // console.log('resp: ', resp);

      // if(resp && resp.results && resp.results[0]){
      //   let loc = resp.results[0].geometry.location
      //   loc.title = resp.results[0].formatted_address
      //   this.props.locationInfo(loc.title)
      //   const point = {
      //     latitude:loc.lat,
      //     longitude:loc.lng,
      //     title:loc.title,
      //     latitudeDelta,
      //     longitudeDelta,
      //   }
      //   console.log('point: ', point);
      //   const region = new AnimatedRegion(point)
      //   this.setState({region, markerPoint: point, regionChanged: true})
      // }
    });
  }

  render() {
    const {locations} = this.state
    return (
      <View>
        <Input type='default' placeholder='Search Location' onChangeText={this.getLocationDetails} /> 

        { 
          locations && locations.map((obj,i) => {
          console.log('obj: ', obj);
            return <View key={i}>
                <Button
                  title={obj.formatted_address}
                  onClick={()=>console.log('this.props: ', obj)}
                  variant='grey'
                />
              </View>
              
            })
        }
      </View>
    )
  }
}
export default SearchLocation;
