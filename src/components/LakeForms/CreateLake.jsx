import React, { useState, useRef } from 'react';
import { TextField, Button, Box } from '@mui/material';
import ImageUploader from '../ImageUploader/ImageUploader';
import Select from 'react-select';
import { usStates } from '../../common/stateList';
import { customSelectStyles } from '../../common/customSelectStyles';
import { generateClient } from '@aws-amplify/api';
import awsconfig from '../../aws-exports'; // Amplify configuration
import { createLake } from '../../graphql/mutations';  // GraphQL mutation to create the lake

// Generate Amplify client
const client = generateClient({
  region: awsconfig.aws_project_region,
  aws_appsync_graphqlEndpoint: awsconfig.aws_appsync_graphqlEndpoint,
  aws_appsync_region: awsconfig.aws_appsync_region,
  aws_appsync_authenticationType: awsconfig.aws_appsync_authenticationType,
});

const CreateLake = () => {
  const [lakeData, setLakeData] = useState({
    name: '',
    state: '',
    description: '',
    images: '', // Will hold the Cloudinary URL
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fileUploaderRef = useRef(null); // Reference to the ImageUploader component

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLakeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleStateChange = (selectedOption) => {
    setLakeData((prevData) => ({
      ...prevData,
      state: selectedOption.value,
    }));
  };

  const handleUploadComplete = (url) => {
    setLakeData((prevData) => ({
      ...prevData,
      images: url, // Save the Cloudinary URL in lakeData
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      console.log('Checking if image is selected...');
      
      // Step 1: Manually trigger image upload if needed
      const imageUrl = await fileUploaderRef.current.uploadImage();
      if (!imageUrl) {
        throw new Error('Image upload failed. Please try again.');
      }

      console.log('Image upload completed, URL:', imageUrl);
      
      // Step 2: Create lake via GraphQL mutation
      const response = await client.graphql({
        query: createLake, // Use your GraphQL mutation
        variables: {
          input: {
            name: lakeData.name,
            state: lakeData.state,
            description: lakeData.description,
            images: [imageUrl], // Store the Cloudinary image URL
          },
        },
      });

      console.log('Lake created successfully:', response.data.createLake);
      // You can now handle success, e.g., redirect or display a message

    } catch (err) {
      console.error('Error creating lake:', err);
      setError('Failed to create lake. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const stateOptions = usStates.map((state) => ({ value: state, label: state }));

  return (
    <Box sx={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <Box mb={3}>
          <TextField
            label="Lake Name"
            name="name"
            value={lakeData.name}
            onChange={handleChange}
            fullWidth
            required
            slotProps={{
              input: {
                style: { backgroundColor: '#fff' },
              },
            }}
          />
        </Box>

        <Box mb={3}>
          <label>State</label>
          <Select
            options={stateOptions}
            onChange={handleStateChange}
            placeholder="Select a state"
            isSearchable
            styles={customSelectStyles}
          />
        </Box>

        <Box mb={3}>
          <TextField
            label="Description"
            name="description"
            value={lakeData.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={3}
            slotProps={{
              input: {
                style: { backgroundColor: '#fff' },
              },
            }}
          />
        </Box>

        <Box mb={3}>
          <ImageUploader
            ref={fileUploaderRef} // Reference to trigger upload later
            label="Upload Lake Images"
            width={600} height={600}
            onUploadComplete={handleUploadComplete} // Handle when the upload is done
            manualUpload={true} // Only upload when instructed
          />
        </Box>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <Box textAlign="center">
          <Button type="submit" variant="contained" color="primary" disabled={loading}>
            {loading ? 'Creating...' : 'Create Lake'}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CreateLake;
