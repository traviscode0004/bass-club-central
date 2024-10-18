// src/pages/SchedulePage.jsx

import React from 'react';

const SchedulePage = () => {
  const events = [
    { id: 1, name: 'Spring Bass Tournament', date: 'April 15, 2024' },
    { id: 2, name: 'Summer Fishing Expo', date: 'June 20, 2024' },
    // Add more events as needed
  ];

  return (
    <div className="container mt-3">
      <h2 className="my-4">Schedule</h2>
      <table className="table table-striped table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Event</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={event.id}>
              <td>{index + 1}</td>
              <td>{event.name}</td>
              <td>{event.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SchedulePage;
