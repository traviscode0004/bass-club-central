import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import ImageUploader from '../ImageUploader/ImageUploader';

const CreateMember = () => {
  const [memberData, setMemberData] = useState({
    userID: '',
    clubID: '',
    dateJoined: '',
    phoneNumber: '',
    clubProfilePictureUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMemberData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Member created:', memberData);
  };

  return (
    <Box sx={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}> {/* Centering the form and adding padding */}
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            label="User ID"
            name="userID"
            value={memberData.userID}
            onChange={handleChange}
            fullWidth
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Club ID"
            name="clubID"
            value={memberData.clubID}
            onChange={handleChange}
            fullWidth
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Date Joined"
            name="dateJoined"
            type="date"
            value={memberData.dateJoined}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{
              shrink: true,  // Ensures the label stays visible when a date is selected
            }}
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={memberData.phoneNumber}
            onChange={handleChange}
            fullWidth
          />
        </Box>

        {/* ImageUploader for Profile Picture */}
        <Box mb={2}>
          <ImageUploader
            label="Upload Profile Picture"
            onUploadComplete={(url) => setMemberData({ ...memberData, clubProfilePictureUrl: url })}
          />
        </Box>

        <Box textAlign="center"> {/* Center the buttons */}
          <Button type="submit" variant="contained" color="primary">
            Add Member
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CreateMember;
