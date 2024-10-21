import React from 'react';
import { Card, CardMedia, CardContent, Typography, CircularProgress } from '@mui/material';
import { useLakes } from '../../context/LakeContext';
 // Import the custom hook to access lakes

function LakesList() {
  const { lakes, loading, error } = useLakes();  // Get lakes, loading, and error from context

  if (loading) {
    return <div><CircularProgress /></div>;  // Display a loader while data is being fetched
  }

  if (error) {
    return <div>Error: {error}</div>;  // Display error message if something went wrong
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', padding: '20px' }}>
      {lakes.map((lake, index) => (
        <Card key={index}>
          {lake.images && lake.images.length > 0 ? (
            <CardMedia
              component="img"
              height="140"
              image={lake.images[0]} // Display the first image from the lake
              alt={lake.name}
            />
          ) : (
            <CardMedia
              component="img"
              height="140"
              image="path-to-placeholder-image.jpg" // Fallback to placeholder image if no images are available
              alt="Placeholder"
            />
          )}
          <CardContent>
            <Typography variant="h6">{lake.name}</Typography>
            <Typography variant="body2">{lake.state}</Typography>
            <Typography variant="body2">{lake.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default LakesList;
