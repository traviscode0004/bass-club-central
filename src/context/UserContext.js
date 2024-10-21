import React, { createContext, useState, useEffect } from 'react';
import { fetchAuthSession, getCurrentUser, signOut as amplifySignOut } from '@aws-amplify/auth';

// Create UserContext
export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({ user: null, groups: [] });
  const [loading, setLoading] = useState(true); // To track if the session is still loading

  useEffect(() => {
    const fetchUserSession = async () => {
      try {
        // Fetch the current authenticated session
        const session = await fetchAuthSession();
        
        // The ID token can be accessed directly from the session
        const idToken = session.tokens.idToken || {}; // Get the idToken from the session
        const userGroups = idToken.payload?.['cognito:groups'] || [];

        // Get the authenticated user details
        const authenticatedUser = await getCurrentUser();

        // Update user and groups in a single state update
        setUserDetails({ user: authenticatedUser, groups: userGroups });

        console.log("🚀 ~ User:", authenticatedUser);
        console.log("🚀 ~ User Groups:", userGroups);

      } catch (error) {
        console.error("Error fetching user session:", error);
      } finally {
        setLoading(false); // Set loading to false once user session is fetched
      }
    };

    fetchUserSession();
  }, []);

  const signOut = async () => {
    try {
      await amplifySignOut();
      setUserDetails({ user: null, groups: [] }); // Clear user and groups on sign out
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        ...userDetails,  // Spread user and groups
        loading,         // Expose the loading state for components to use if needed
        signOut,         // Make signOut available for components
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
