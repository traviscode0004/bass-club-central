import React, { createContext, useState, useEffect, useContext } from 'react';
import { generateClient } from '@aws-amplify/api';
import awsconfig from '../aws-exports';
import { listLakes } from '../graphql/queries';

// Set up Amplify client
const client = generateClient({
  region: awsconfig.aws_project_region,
  aws_appsync_graphqlEndpoint: awsconfig.aws_appsync_graphqlEndpoint,
  aws_appsync_region: awsconfig.aws_appsync_region,
  aws_appsync_authenticationType: awsconfig.aws_appsync_authenticationType,
});

// Create a Context for Lakes
const LakesContext = createContext();

// Create a Provider component
export const LakesProvider = ({ children }) => {
  const [lakes, setLakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLakes = async () => {
      try {
        const response = await client.graphql({
          query: listLakes,
        });
        setLakes(response.data.listLakes.items);  // Set lakes in state
      } catch (err) {
        setError('Failed to fetch lakes');
      } finally {
        setLoading(false);
      }
    };

    fetchLakes();
  }, []);

  return (
    <LakesContext.Provider value={{ lakes, loading, error }}>
      {children}
    </LakesContext.Provider>
  );
};

// Custom hook to use the LakesContext
export const useLakes = () => useContext(LakesContext);
