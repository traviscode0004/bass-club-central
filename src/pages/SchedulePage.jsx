import React from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

const SchedulePage = () => {
  const events = [
    { id: 1, name: 'Spring Bass Tournament', date: 'April 15, 2024' },
    { id: 2, name: 'Summer Fishing Expo', date: 'June 20, 2024' },
    // Add more events as needed
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 3 }}>
      <Typography variant="h4" gutterBottom>
        Schedule
      </Typography>

      <Paper elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Event</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event, index) => (
              <TableRow key={event.id} hover>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{event.name}</TableCell>
                <TableCell>{event.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default SchedulePage;

