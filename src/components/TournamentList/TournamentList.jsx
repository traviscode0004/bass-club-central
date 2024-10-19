import { Card, CardMedia, CardContent, Typography } from '@mui/material';

function TournamentsList() {
  const tournaments = [
    {
      name: 'James Creek Bass Tournament',
      location: 'James Creek, Pennsylvania',
      date: 'Oct 20 – 25',
      price: '$100 entry fee',
      image: 'your-image-path.jpg', // Add your image path
    },
    {
      name: 'James Creek Bass Tournament',
      location: 'James Creek, Pennsylvania',
      date: 'Oct 20 – 25',
      price: '$100 entry fee',
      image: 'your-image-path.jpg', // Add your image path
    },
    {
      name: 'James Creek Bass Tournament',
      location: 'James Creek, Pennsylvania',
      date: 'Oct 20 – 25',
      price: '$100 entry fee',
      image: 'your-image-path.jpg', // Add your image path
    },
    {
      name: 'James Creek Bass Tournament',
      location: 'James Creek, Pennsylvania',
      date: 'Oct 20 – 25',
      price: '$100 entry fee',
      image: 'your-image-path.jpg', // Add your image path
    },
    {
      name: 'James Creek Bass Tournament',
      location: 'James Creek, Pennsylvania',
      date: 'Oct 20 – 25',
      price: '$100 entry fee',
      image: 'your-image-path.jpg', // Add your image path
    },
    {
      name: 'James Creek Bass Tournament',
      location: 'James Creek, Pennsylvania',
      date: 'Oct 20 – 25',
      price: '$100 entry fee',
      image: 'your-image-path.jpg', // Add your image path
    },
    {
      name: 'James Creek Bass Tournament',
      location: 'James Creek, Pennsylvania',
      date: 'Oct 20 – 25',
      price: '$100 entry fee',
      image: 'your-image-path.jpg', // Add your image path
    },
    {
      name: 'James Creek Bass Tournament',
      location: 'James Creek, Pennsylvania',
      date: 'Oct 20 – 25',
      price: '$100 entry fee',
      image: 'your-image-path.jpg', // Add your image path
    },
    {
      name: 'James Creek Bass Tournament',
      location: 'James Creek, Pennsylvania',
      date: 'Oct 20 – 25',
      price: '$100 entry fee',
      image: 'your-image-path.jpg', // Add your image path
    },
    {
      name: 'James Creek Bass Tournament',
      location: 'James Creek, Pennsylvania',
      date: 'Oct 20 – 25',
      price: '$100 entry fee',
      image: 'your-image-path.jpg', // Add your image path
    },
    {
      name: 'James Creek Bass Tournament',
      location: 'James Creek, Pennsylvania',
      date: 'Oct 20 – 25',
      price: '$100 entry fee',
      image: 'your-image-path.jpg', // Add your image path
    },
    {
      name: 'James Creek Bass Tournament',
      location: 'James Creek, Pennsylvania',
      date: 'Oct 20 – 25',
      price: '$100 entry fee',
      image: 'your-image-path.jpg', // Add your image path
    },
    {
      name: 'James Creek Bass Tournament',
      location: 'James Creek, Pennsylvania',
      date: 'Oct 20 – 25',
      price: '$100 entry fee',
      image: 'your-image-path.jpg', // Add your image path
    },
    {
      name: 'James Creek Bass Tournament',
      location: 'James Creek, Pennsylvania',
      date: 'Oct 20 – 25',
      price: '$100 entry fee',
      image: 'your-image-path.jpg', // Add your image path
    },
    {
      name: 'James Creek Bass Tournament',
      location: 'James Creek, Pennsylvania',
      date: 'Oct 20 – 25',
      price: '$100 entry fee',
      image: 'your-image-path.jpg', // Add your image path
    },
    {
      name: 'James Creek Bass Tournament',
      location: 'James Creek, Pennsylvania',
      date: 'Oct 20 – 25',
      price: '$100 entry fee',
      image: 'your-image-path.jpg', // Add your image path
    },
    {
      name: 'James Creek Bass Tournament',
      location: 'James Creek, Pennsylvania',
      date: 'Oct 20 – 25',
      price: '$100 entry fee',
      image: 'your-image-path.jpg', // Add your image path
    },
    {
      name: 'James Creek Bass Tournament',
      location: 'James Creek, Pennsylvania',
      date: 'Oct 20 – 25',
      price: '$100 entry fee',
      image: 'your-image-path.jpg', // Add your image path
    },
    {
      name: 'James Creek Bass Tournament',
      location: 'James Creek, Pennsylvania',
      date: 'Oct 20 – 25',
      price: '$100 entry fee',
      image: 'your-image-path.jpg', // Add your image path
    },
    {
      name: 'James Creek Bass Tournament',
      location: 'James Creek, Pennsylvania',
      date: 'Oct 20 – 25',
      price: '$100 entry fee',
      image: 'your-image-path.jpg', // Add your image path
    },
    // Add more tournament objects...
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', padding: '20px' }}>
      {tournaments.map((tournament, index) => (
        <Card key={index}>
          <CardMedia
            component="img"
            height="140"
            image={tournament.image}
            alt={tournament.name}
          />
          <CardContent>
            <Typography variant="h6">{tournament.name}</Typography>
            <Typography variant="body2">{tournament.location}</Typography>
            <Typography variant="body2">{tournament.date}</Typography>
            <Typography variant="body2">{tournament.price}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default TournamentsList;
