import styled from 'styled-components';

export const MainView = styled.View`
  marginTop:-80;
`


export const customMapStyle = [
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