import { IconButton, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SportsIcon from '@mui/icons-material/Sports'; // Example icon

function IconBar() {
  const nearbyClubs = [
    { name: 'Mountain Lake Club', distance: '5 miles' },
    { name: 'River Bass Club', distance: '10 miles' },
    { name: 'Mountain Lake Club', distance: '5 miles' },
    { name: 'River Bass Club', distance: '10 miles' },
    { name: 'Mountain Lake Club', distance: '5 miles' },
    { name: 'River Bass Club', distance: '10 miles' },
    { name: 'Mountain Lake Club', distance: '5 miles' },
    { name: 'River Bass Club', distance: '10 miles' },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      {nearbyClubs.map((club, index) => (
        <div key={index} style={{ textAlign: 'center', marginRight: '20px' }}>
          <IconButton>
            <SportsIcon />
          </IconButton>
          <Typography>{club.name}</Typography>
          <Typography variant="caption">{club.distance}</Typography>
        </div>
      ))}
    </div>
  );
}

export default IconBar;
