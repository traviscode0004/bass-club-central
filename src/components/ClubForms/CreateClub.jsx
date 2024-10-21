import React, { useState } from 'react';
import { TextField, Button, InputLabel, FormControl, Select, MenuItem, Box } from '@mui/material';
import ImageUploader from '../ImageUploader/ImageUploader';
import { usStates } from '../../common/stateList';

const CreateClub = () => {
  const [clubData, setClubData] = useState({
    name: '',
    state: '',
    cityArea: '',
    contactEmail: '',
    phoneNumber: '',
    description: '',
    rules: '',
    memberLimit: '',
    logoUrl: '',
    bannerImageUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClubData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Club created:', clubData);
  };

  return (
    <Box sx={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}> {/* Center the form */}
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            label="Club Name"
            name="name"
            value={clubData.name}
            onChange={handleChange}
            fullWidth
            required
          />
        </Box>

        <Box mb={2}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="state-select-label">State</InputLabel>
            <Select
              labelId="state-select-label"
              id="state-select"
              value={clubData.state}
              onChange={(e) => setClubData({ ...clubData, state: e.target.value })}
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

        <Box mb={2}>
          <TextField
            label="City/Area"
            name="cityArea"
            value={clubData.cityArea}
            onChange={handleChange}
            fullWidth
            required
          />
        </Box>

        <Box mb={2}>
          <TextField
            label="Contact Email"
            name="contactEmail"
            value={clubData.contactEmail}
            onChange={handleChange}
            fullWidth
            required
          />
        </Box>

        <Box mb={2}>
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={clubData.phoneNumber}
            onChange={handleChange}
            fullWidth
          />
        </Box>

        <Box mb={2}>
          <TextField
            label="Description"
            name="description"
            value={clubData.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={3}
          />
        </Box>

        <Box mb={2}>
          <TextField
            label="Club Rules"
            name="rules"
            value={clubData.rules}
            onChange={handleChange}
            fullWidth
            multiline
            rows={3}
          />
        </Box>

        <Box mb={2}>
          <TextField
            label="Member Limit"
            name="memberLimit"
            value={clubData.memberLimit}
            onChange={handleChange}
            type="number"
            fullWidth
          />
        </Box>

        {/* Image Uploaders for Logo and Banner */}
        <Box mb={2}>
          <ImageUploader
            label="Upload Club Logo"
            onUploadComplete={(url) => setClubData({ ...clubData, logoUrl: url })}
          />
        </Box>

        <Box mb={2}>
          <ImageUploader
            label="Upload Banner Image"
            onUploadComplete={(url) => setClubData({ ...clubData, bannerImageUrl: url })}
          />
        </Box>

        <Box textAlign="center"> {/* Center the buttons */}
          <Button type="submit" variant="contained" color="primary">
            Create Club
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CreateClub;
