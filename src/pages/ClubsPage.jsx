// src/pages/ClubsPage.jsx

import React from 'react';

const ClubsPage = () => {
  const clubs = [
    { id: 1, name: 'Lakeview Bass Club', location: 'Lakeview City' },
    { id: 2, name: 'Riverbend Anglers', location: 'Riverbend Town' },
    // Add more clubs as needed
  ];

  return (
    <div className="container">
      <h2 className="my-4">Club Directory</h2>
      <div className="row">
        {clubs.map((club) => (
          <div className="col-md-6 col-lg-4 mb-4" key={club.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{club.name}</h5>
                <p className="card-text">{club.location}</p>
                {/* Add more details or buttons as needed */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClubsPage;
