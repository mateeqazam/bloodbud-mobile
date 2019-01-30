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


import {
  MainView,
} from './styles'


const googleApiKey = 'AIzaSyB94Glgain12Qqgn9Vzj4nwkQiiFKWIqx8'

class SearchLocation extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Search Hospital',
      onBackPress: () => navigation.pop(),
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
    const url3 = `${base_url}place/autocomplete/json?input=${location}%hospital&types=geocode&key=${googleApiKey}`
    const url = `${base_url}geocode/json?address=${location}&components=health&key=${googleApiKey}`
    
    fetch(url)
    .then(response => response.json())
    .then(locs => {
      this.setState({locations: locs.results})
    })
  }

  render() {
    const {locations} = this.state
    const {navigation:{navigate}} = this.props
    return (
      <MainView>
        <Input type='default' placeholder='Hospital Name or lat,lng' onChangeText={this.getLocationDetails} /> 
        { 
          locations && locations.map((obj,i) => {
            return <Button
                  key={i}
                  title={obj.formatted_address}
                  onClick={()=>{
                    const isHospital = obj.types.indexOf('hospital')
                    const isHealth = obj.types.indexOf('health')
                    
                    const hospital = obj.formatted_address.match(/hospital/i)

                    if(isHospital < 0 && isHealth < 0 && !hospital) return alert('Select location for hospital')
                    navigate("RequestForm", { selectedLocation: obj })
                  }}
                  variant='grey'
                />
            })
        }
      </MainView>
    )
  }
}

export default SearchLocation