import gql from 'graphql-tag';

export const GET_SITES_QUERY = gql`
  {
    users {
      username
      messages {
        text
      }
    }
  }
`;

// export const FETCH_RANK_QUERY = gql`
//   query($sku: String!, $siteName: String!) {
//     rank(sku: $sku, siteName: $siteName) {
//       id
//       position
//       sortBy
//       createdAt
//       updatedAt
//     }
//   }
// `;

// export const SET_DISABLE_CONFIGURATION_MUTATION = gql `
// 	mutation(
// 		$id: Int!
// 	){
// 		disableConfiguration( input:{
// 			id: $id
// 		}){
// 			status
// 			message
// 		}
// 	}
// `

// const responseFromActivation = await client.mutate({
//   mutation: configObject.active ? SET_DISABLE_CONFIGURATION_MUTATION : SET_ENABLE_CONFIGURATION_MUTATION,
//   variables: getConfigurationActivationParameters(configObject, slotNumber)
// })
