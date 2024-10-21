const cloudinary = require('cloudinary').v2;

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.handler = async (event) => {
  try {
    // Parse the request body to get the image content and dimensions
    const { fileContent, width, height } = JSON.parse(event.body);

    if (!fileContent) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*', // CORS header
          'Access-Control-Allow-Headers': 'Content-Type', // CORS header
          'Access-Control-Allow-Methods': 'OPTIONS,POST', // CORS header
        },
        body: JSON.stringify({ error: 'Missing fileContent in request body' }),
      };
    }

    // Validate width and height (optional: ensure they are valid integers)
    const imageWidth = parseInt(width, 10) || null; // Provide default dimensions if needed
    const imageHeight = parseInt(height, 10) || null;

    // Upload the image to Cloudinary with resizing and cropping
    const uploadResult = await cloudinary.uploader.upload(
      `data:image/jpeg;base64,${fileContent}`, // Ensure base64 format is correct
      {
        width: imageWidth,   // Use the width provided, or default
        height: imageHeight, // Use the height provided, or default
        crop: 'fill',        // Crop to fit dimensions
        quality: 'auto',     // Automatically optimize the image quality
        fetch_format: 'auto' // Ensure the best format for the image
      }
    );

    // Respond with the uploaded image URL
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Enable CORS
        'Access-Control-Allow-Methods': 'OPTIONS,POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ url: uploadResult.secure_url }),
    };
  } catch (error) {
    console.error('Error uploading image:', error);

    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*', // Enable CORS
        'Access-Control-Allow-Methods': 'OPTIONS,POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ error: 'Failed to upload image to Cloudinary' }),
    };
  }
};
