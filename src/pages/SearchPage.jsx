import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api'; // Gen 2 API client
import awsconfig from '../aws-exports';
import { listTournaments, listClubs } from '../graphql/queries'; // Assume these are the GraphQL queries

// Initialize Amplify and client
Amplify.configure(awsconfig);
const client = generateClient();

function SearchPage() {
  const [searchState, setSearchState] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [searchLake, setSearchLake] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      // Query for Tournaments
      const tournamentResult = await client.graphql({
        query: listTournaments,
        variables: {
          filter: {
            or: [
              { lakeState: { contains: searchState } },
              { date: { eq: searchDate } },
              { lake: { name: { contains: searchLake } } }
            ]
          }
        }
      });

      // Query for Clubs
      const clubResult = await client.graphql({
        query: listClubs,
        variables: {
          filter: {
            tournaments: { items: { lakeState: { contains: searchState }, date: { eq: searchDate }, lake: { name: { contains: searchLake } } } }
          }
        }
      });

      setResults([...tournamentResult.data.listTournaments.items, ...clubResult.data.listClubs.items]);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Search Tournaments & Clubs</h2>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="State"
            value={searchState}
            onChange={(e) => setSearchState(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="date"
            className="form-control"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Lake"
            value={searchLake}
            onChange={(e) => setSearchLake(e.target.value)}
          />
        </div>
      </div>
      <button className="btn btn-primary mt-3" onClick={handleSearch}>
        Search
      </button>

      {/* Results Section */}
      <div className="results mt-5">
        {results.length > 0 ? (
          results.map((result, index) => (
            <div key={index} className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{result.name}</h5>
                <p className="card-text">Location: {result.location || result.lakeName}</p>
                <p className="card-text">Date: {result.date}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
