// import { AsyncStorage } from 'react-native';
import ApolloClient from 'apollo-boost';
// import { GRAPH_QL_API_BASE_URL } from '../config';

export default new ApolloClient({
  uri: 'https://gql-node-training.herokuapp.com/graphql',
  async request(operation) {
    //const token = await AsyncStorage.getItem('jwtToken')
    // console.log('**************** Token *************', token);
    operation.setContext({
      headers: {
        authorization: 'token',
      },
    });
  },
});
