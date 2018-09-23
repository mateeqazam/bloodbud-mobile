/**
*
* App
*
*/

import React from 'react';
// import PropTypes from 'prop-types';

import AppComponent from '../../components/views/SampleComponent';
import { ThemeProvider } from 'styled-components';
import { Font } from 'expo'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      'Segoeui-Regular': require('./Segoeui-Regular.ttf'),
    });
    this.setState({ loading: false });
  }

  render() {
    const theme = {
      fontSize: 12,
      fontFamily: 'Segoeui-Regular',
      colors:{
        text:'123',
        gray: '#DDDDDD',
        danger: '#DDDDDD'
      }
    }
    if(this.state.loading) return null

    return (

      <ThemeProvider theme={theme}>
        <AppComponent />
      </ThemeProvider>
    );
  }
}

App.propTypes = {

};

export default App;
