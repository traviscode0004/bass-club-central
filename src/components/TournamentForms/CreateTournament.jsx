import React, { useState, useEffect } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, Checkbox, ListItemText, Box } from '@mui/material';
import { generateClient } from '@aws-amplify/api';
import awsconfig from '../../aws-exports';
import { listLakes, listBoatRamps } from '../../graphql/queries';  // Your GraphQL queries
import ImageUploader from '../ImageUploader/ImageUploader';
import { usStates } from '../../common/stateList';

// Generate the Amplify GraphQL client
const client = generateClient({
  region: awsconfig.aws_project_region,
  aws_appsync_graphqlEndpoint: awsconfig.aws_appsync_graphqlEndpoint,
  aws_appsync_region: awsconfig.aws_appsync_region,
  aws_appsync_authenticationType: awsconfig.aws_appsync_authenticationType,
});

const CreateTournament = () => {
  const [tournamentData, setTournamentData] = useState({
    name: '',
    date: '',
    startTime: '',
    endTime: '',
    description: '',
    cost: '',
    state: '',
    location: '',
    phoneNumber: '',
    logoUrl: '',          // Logo Image URL
    bannerImageUrl: '',   // Banner Image URL
    tournamentLakes: [],  // Array for selecting multiple lakes
    boatRamps: [],        // Array for selected boat ramps
  });

  const [lakes, setLakes] = useState([]);        // Store the list of lakes
  const [boatRamps, setBoatRamps] = useState([]); // Store the list of boat ramps

  // Fetch lakes from the database when the component mounts
  useEffect(() => {
    const fetchLakes = async () => {
      try {
        const response = await client.graphql({
          query: listLakes,
        });
        setLakes(response.data.listLakes.items);  // Set the lakes to state
      } catch (error) {
        console.error('Error fetching lakes:', error);
      }
    };
    fetchLakes();
  }, []);

  // Fetch boat ramps based on selected lake
  const fetchBoatRamps = async (lakeID) => {
    try {
      const response = await client.graphql({
        query: listBoatRamps,
        variables: { lakeID }, // Pass the selected lake ID to filter boat ramps
      });
      setBoatRamps(response.data.listBoatRamps.items); // Set boat ramps for the selected lake
    } catch (error) {
      console.error('Error fetching boat ramps:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTournamentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLakeChange = (event) => {
    const selectedLakes = event.target.value;
    setTournamentData({
      ...tournamentData,
      tournamentLakes: selectedLakes,  // Updates the lakes selected
    });

    // Fetch the boat ramps when a lake is selected (only one lake should be selected at a time)
    if (selectedLakes.length === 1) {
      fetchBoatRamps(selectedLakes[0]);
    } else {
      setBoatRamps([]); // Clear boat ramps if more than one lake is selected
    }
  };

  const handleBoatRampChange = (event) => {
    setTournamentData({
      ...tournamentData,
      boatRamps: event.target.value,  // Updates the selected boat ramps
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Tournament created:', tournamentData);
  };

  return (
    <Box sx={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}> {/* Centering the form and adding padding */}
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            label="Tournament Name"
            name="name"
            value={tournamentData.name}
            onChange={handleChange}
            fullWidth
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Date"
            name="date"
            type="date"
            value={tournamentData.date}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Start Time"
            name="startTime"
            type="time"
            value={tournamentData.startTime}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="End Time"
            name="endTime"
            type="time"
            value={tournamentData.endTime}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
        </Box>

        <Box mb={2}>
          <TextField
            label="Description"
            name="description"
            value={tournamentData.description}
            onChange={handleChange}
            multiline
            rows={3}
            fullWidth
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Cost"
            name="cost"
            type="number"
            value={tournamentData.cost}
            onChange={handleChange}
            fullWidth
            required
          />
        </Box>

        {/* State Dropdown */}
        <Box mb={2}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="state-select-label">State</InputLabel>
            <Select
              labelId="state-select-label"
              id="state-select"
              value={tournamentData.state}
              onChange={(e) => setTournamentData({ ...tournamentData, state: e.target.value })}
              label="State"
              required
            >
              {usStates.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* Multiple Selection for Tournament Lakes */}
        <Box mb={2}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="lake-select-label">Select Tournament Lakes</InputLabel>
            <Select
              labelId="lake-select-label"
              id="lake-select"
              multiple
              value={tournamentData.tournamentLakes}
              onChange={handleLakeChange}
              renderValue={(selected) => selected.map((lakeId) => {
                const lake = lakes.find(l => l.id === lakeId);
                return lake ? lake.name : '';
              }).join(', ')}
            >
              {lakes.map((lake) => (
                <MenuItem key={lake.id} value={lake.id}>
                  <Checkbox checked={tournamentData.tournamentLakes.indexOf(lake.id) > -1} />
                  <ListItemText primary={`${lake.name} (${lake.state})`} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* Boat Ramp Selection (dependent on lake selection) */}
        {boatRamps.length > 0 && (
          <Box mb={2}>
            <FormControl fullWidth margin="normal">
              <InputLabel id="boat-ramp-select-label">Select Boat Ramp</InputLabel>
              <Select
                labelId="boat-ramp-select-label"
                id="boat-ramp-select"
                multiple
                value={tournamentData.boatRamps}
                onChange={handleBoatRampChange}
                renderValue={(selected) => selected.map((rampId) => {
                  const ramp = boatRamps.find(r => r.id === rampId);
                  return ramp ? ramp.name : '';
                }).join(', ')}
              >
                {boatRamps.map((ramp) => (
                  <MenuItem key={ramp.id} value={ramp.id}>
                    <Checkbox checked={tournamentData.boatRamps.indexOf(ramp.id) > -1} />
                    <ListItemText primary={`${ramp.name} (${ramp.location})`} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        )}

        <Box mb={2}>
          <TextField
            label="Location"
            name="location"
            value={tournamentData.location}
            onChange={handleChange}
            fullWidth
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={tournamentData.phoneNumber}
            onChange={handleChange}
            fullWidth
          />
        </Box>

        {/* ImageUploaders for Logo and Banner */}
       {/*  <Box mb={2}>
          <ImageUploader
            label="Upload Logo"
            onUploadComplete={(url) => setTournamentData({ ...tournamentData, logoUrl: url })}
          />
        </Box>
        <Box mb={2}>
          <ImageUploader
            label="Upload Banner Image"
            onUploadComplete={(url) => setTournamentData({ ...tournamentData, bannerImageUrl: url })}
          />
        </Box> */}

        <Box textAlign="center">
          <Button type="submit" variant="contained" color="primary">
            Create Tournament
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CreateTournament;

