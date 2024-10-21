import { generateClient } from 'aws-amplify/api';

export const connectToGraphqlAPI = async ({ graphqlQuery, variables = {} }) => {
  try {
    // Generate the client to connect to the AppSync GraphQL API
    const client = generateClient();

    // Perform the GraphQL operation using the client
    const result = await client.query({
      query: graphqlQuery,
      variables
    });

    return result;
  } catch (error) {
    console.error('Error connecting to GraphQL API:', error);
    throw error;
  }
};

export const getQueryClient = async ({ query, payload, path }) => {
  try {
    let result = [];
    do {
      const { data } = await connectToGraphqlAPI({
        graphqlQuery: query,
        variables: payload,
      });

      result = result.concat(data[path]?.items ? data[path].items : data[path]);
      payload.nextToken = data[path]?.nextToken;
    } while (payload.nextToken);

    return result;
  } catch (err) {
    console.error(err);
    return [];
  }
};

