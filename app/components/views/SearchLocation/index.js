/**
 *
 * SearchLocation
 *
 */

import React from 'react';
import { AsyncStorage } from 'react-native';

import Button from '../../widgets/Button';
import Input from '../../widgets/Input';
import Text from '../../widgets/Text';
import Icon from '../../widgets/Icon';

import { MainView, InfoView, Locations, Wrapper } from './styles';

const googleApiKey = 'AIzaSyB94Glgain12Qqgn9Vzj4nwkQiiFKWIqx8';

class SearchLocation extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Search Hospital',
      onBackPress: () => navigation.pop(),
    };
  };

  _retrieveData = async key => {
    try {
      let value = await AsyncStorage.getItem(key);
      console.log('value: ', value);
      return value ? JSON.parse(value) : '31.5204 , 74.3587';
    } catch (e) {
      console.log('Error retrieving data: ', e);
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      locations: [],
    };
    this.getLocationDetails('');
  }

  getLocationDetails = async location => {
    const base_url = 'https://maps.googleapis.com/maps/api/';
    let nearby = !location;
    location = location || 'hospital';
    let value = await this._retrieveData('lastLocation');
    const url = `${base_url}place/textsearch/json?query=${location}&location=${value}&radius=10000&key=${googleApiKey}`;
    fetch(url)
      .then(response => response.json())
      .then(locs => {
        this.setState({ locations: locs.results, nearby });
      });
  };

  openLocation(obj) {
    console.log('obj: ', obj);
    const {
      navigation: { navigate },
    } = this.props;
    const isHospital = obj.types.indexOf('hospital');
    const isHealth = obj.types.indexOf('health');
    const hospital = obj.formatted_address.match(/hospital/i);
    if (isHospital < 0 && isHealth < 0 && !hospital)
      return alert('Select location for hospital');
    navigate('RequestForm', { selectedLocation: obj });
  }

  render() {
    const { locations, nearby } = this.state;
    const type = nearby ? 'Nearby Hospitals' : 'Search Results';
    return (
      <MainView>
        <Input
          icon="search"
          type="default"
          placeholder="Hospital Name or lat,lng"
          onChangeText={this.getLocationDetails}
        />
        <Text
          borderBottomWidth="1px"
          backgroundColor="lightgrey"
          padding={'5px'}
        >
          {type}
        </Text>
        <Locations>
          {locations &&
            locations.map((obj, i) => {
              return (
                <Wrapper key={i} onPress={() => this.openLocation(obj)}>
                  <Icon marginTop={7} fontSize={22} name={'map-marker'} />
                  <InfoView>
                    <Text>{obj.name || obj.formatted_address}</Text>
                    <Text>{obj.formatted_address}</Text>
                  </InfoView>
                </Wrapper>
              );
            })}
        </Locations>
      </MainView>
    );
  }
}

export default SearchLocation;
