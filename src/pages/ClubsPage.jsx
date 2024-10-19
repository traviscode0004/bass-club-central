import React from 'react';
import { Container, Box, Grid, Card, CardMedia, CardContent, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
// images
import floydImage from '../img/floyd.jpg';
import teamImage from '../img/dscn0357_orig.jpg';
import mapImage from '../img/map.png';

function ClubsPage() {
  return (
    <Container maxWidth="lg">
      {/* Ad Section */}
      <Box my={3}>
        <Grid container justifyContent="center">
          <Grid item>
            <a
              href="http://www.anrdoezrs.net/jl65cy63y5LUVRTVVPLNPRNNOOT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="http://www.ftjcfx.com/o0104xjnbhf09A68AA4024622338"
                alt="Subphantis"
                style={{ border: 0 }}
              />
            </a>
          </Grid>
        </Grid>
      </Box>

      {/* Main Content Section */}
      <Grid container spacing={3}>
        {/* Left Column: Floyd County Info */}
        <Grid item xs={12} md={3}>
          <Card sx={{ mb: 3 }}>
            <CardMedia
              component="img"
              image={floydImage}
              alt="Floyd County Bass Anglers"
              title="Floyd County Bass Anglers"
            />
          </Card>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6">Next Tournament</Typography>
              <Typography>Norman 03/14/19 6:00am</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Center Column: Standings & Tournament Results */}
        <Grid item xs={12} md={6}>
          {/* Standings */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6">Floyd Bass Club Points</Typography>
              <Typography variant="subtitle1">Current Standings</Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Member</TableCell>
                    <TableCell>Partner</TableCell>
                    <TableCell>Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Joe L</TableCell>
                    <TableCell>Tanner L</TableCell>
                    <TableCell>201</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>Dennis H</TableCell>
                    <TableCell>Eric H</TableCell>
                    <TableCell>199</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell>Anthony W</TableCell>
                    <TableCell>Greg C</TableCell>
                    <TableCell>193</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Tournament Results */}
          <Card sx={{ mb: 3 }}>
            <CardMedia
              component="img"
              image={teamImage}
              alt="Decker and Decker take First Place"
              title="Decker and Decker take First Place"
            />
            <CardContent>
              <Typography variant="h6">Decker and Decker take First Place</Typography>
              <Typography variant="body2">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Column: Schedule & Lake Map */}
        <Grid item xs={12} md={3}>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6">Tournament Schedule</Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Lake</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>03/09/19</TableCell>
                    <TableCell>Smith Mountain</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>03/23/19</TableCell>
                    <TableCell>Falls Lake</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>04/06/19</TableCell>
                    <TableCell>Claytor Lake</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card sx={{ mb: 3 }}>
            <CardMedia
              component="img"
              image={mapImage}
              alt="Kerr Lake"
              title="Kerr Lake"
            />
            <CardContent>
              <Typography variant="h6">Kerr Lake</Typography>
              <Typography variant="body2">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ClubsPage;
