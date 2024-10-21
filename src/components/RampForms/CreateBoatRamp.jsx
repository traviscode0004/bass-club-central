import React, { useState, useEffect, useRef } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import ImageUploader from '../ImageUploader/ImageUploader';
import { generateClient } from '@aws-amplify/api';  // For Amplify v6
import awsconfig from '../../aws-exports';
import { listLakes } from '../../graphql/queries';  // The GraphQL query to list lakes
import { createBoatRamp } from '../../graphql/mutations';  // The GraphQL mutation to create a boat ramp

// Generate the Amplify GraphQL client
const client = generateClient({
  region: awsconfig.aws_project_region,
  aws_appsync_graphqlEndpoint: awsconfig.aws_appsync_graphqlEndpoint,
  aws_appsync_region: awsconfig.aws_appsync_region,
  aws_appsync_authenticationType: awsconfig.aws_appsync_authenticationType,
});

const CreateBoatRamp = () => {
  const [rampData, setRampData] = useState({
    name: '',
    location: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    description: '',
    images: '',
    lakeID: '',  // Lake selection
  });

  const [lakes, setLakes] = useState([]);  // Store the list of lakes
  const [loading, setLoading] = useState(false);  // For loading state
  const [error, setError] = useState(null);  // For error handling
  const fileUploaderRef = useRef(null);  // Reference to trigger image upload manually

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRampData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Check if an image has been uploaded before proceeding
    if (!rampData.images) {
      setError('Please upload an image for the boat ramp.');
      setLoading(false);
      return;
    }

    try {
      const input = {
        name: rampData.name,
        location: rampData.location,
        street: rampData.street,
        city: rampData.city,
        state: rampData.state,
        zipCode: rampData.zipCode,
        description: rampData.description,
        images: rampData.images,  // Use the Cloudinary URL for the image
        lakeID: rampData.lakeID,
      };

      const response = await client.graphql({
        query: createBoatRamp,
        variables: { input },
      });
      
      console.log('Boat Ramp created:', response.data.createBoatRamp);
      // You can handle the success case here (e.g., redirect or show a success message)

    } catch (error) {
      console.error('Error creating boat ramp:', error);
      setError('Failed to create boat ramp. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async () => {
    if (fileUploaderRef.current) {
      await fileUploaderRef.current.uploadImage();
    }
  };

  const stateOptions = lakes.map((lake) => ({ value: lake.id, label: `${lake.name} (${lake.state})` }));

  return (
    <Box sx={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <form onSubmit={async (e) => {
        e.preventDefault();
        await handleImageUpload();  // Trigger image upload before form submission
        handleSubmit(e);
      }}>
        <Box mb={2}>
          <TextField
            label="Ramp Name"
            name="name"
            value={rampData.name}
            onChange={handleChange}
            fullWidth
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Location"
            name="location"
            value={rampData.location}
            onChange={handleChange}
            fullWidth
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Street"
            name="street"
            value={rampData.street}
            onChange={handleChange}
            fullWidth
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="City"
            name="city"
            value={rampData.city}
            onChange={handleChange}
            fullWidth
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="State"
            name="state"
            value={rampData.state}
            onChange={handleChange}
            fullWidth
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Zip Code"
            name="zipCode"
            value={rampData.zipCode}
            onChange={handleChange}
            fullWidth
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Description"
            name="description"
            value={rampData.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={3}
          />
        </Box>

        {/* Select Lake Dropdown */}
        <Box mb={2}>
          <FormControl fullWidth required>
            <InputLabel id="lake-select-label">Select Lake</InputLabel>
            <Select
              labelId="lake-select-label"
              id="lake-select"
              name="lakeID"
              value={rampData.lakeID}
              onChange={handleChange}
              fullWidth
            >
              {lakes.map((lake) => (
                <MenuItem key={lake.id} value={lake.id}>
                  {lake.name} ({lake.state})
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* ImageUploader for Boat Ramp Images */}
        <Box mb={2}>
          <ImageUploader
            ref={fileUploaderRef}
            label="Upload Boat Ramp Images"
            width={600}
            height={600}
            manualUpload={true}
            onUploadComplete={(url) => setRampData({ ...rampData, images: url })}
          />
        </Box>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <Box textAlign="center">
          <Button type="submit" variant="contained" color="primary" disabled={loading}>
            {loading ? 'Creating...' : 'Create Boat Ramp'}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CreateBoatRamp;

