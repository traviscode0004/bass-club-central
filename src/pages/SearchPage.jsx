import React, { useState } from 'react';
import { Box, Container, Grid, TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { usStates } from '../common/stateList';

const SearchPage = () => {
  const [searchState, setSearchState] = useState('');
  const [searchDate, setSearchDate] = useState('');

 

  const handleSearch = () => {
    // Implement the search logic here
    console.log('State:', searchState, 'Date:', searchDate, );
  };

  return (
    <Box sx={{ /* bgcolor: '#f5f5f5', */ minHeight: '100vh', pt: 10 }}>
      <Container maxWidth="md">
        <Typography variant="h4" sx={{ mb: 3, textAlign: 'center', color: 'primary.main' }}>
          Search Tournaments & Clubs
        </Typography>
        
        <Box sx={{ p: 3, bgcolor: 'white', borderRadius: 2, boxShadow: 3 }}>
          <Grid container spacing={2}>
            {/* State Dropdown */}
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="state-select-label">State</InputLabel>
                <Select
                  labelId="state-select-label"
                  id="state-select"
                  value={searchState}
                  onChange={(e) => setSearchState(e.target.value)}
                  label="State"
                >
                  {usStates.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Date Input */}
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={searchDate}
                onChange={(e) => setSearchDate(e.target.value)}
                variant="outlined"
              />
            </Grid>

           
          </Grid>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSearch}
            sx={{ mt: 3, p: 1.5, boxShadow: 3 }}
          >
            Search
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default SearchPage;

