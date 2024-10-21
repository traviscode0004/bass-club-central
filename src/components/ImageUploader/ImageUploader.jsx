import React, { useState, useCallback, useImperativeHandle, forwardRef } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUploader = forwardRef(({ onUploadComplete, manualUpload = false, width = 500, height = 500 }, ref) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [uploading, setUploading] = useState(false);

  // API Gateway endpoint (Lambda function URL)
  const apiGatewayUrl = 'https://s0ss43vze1.execute-api.us-east-1.amazonaws.com/dev/upload'; // Replace with your actual API Gateway URL

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length === 0) {
      setError('No file selected');
      return;
    }

    const selectedFile = acceptedFiles[0];
    setFile(selectedFile);
    setError(null); // Clear any previous error
  }, []);

  // Function to handle actual image upload
  const uploadImage = async () => {
    if (!file) {
      setError('Please select an image to upload.');
      return null;
    }

    const reader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        const base64Image = reader.result.split(',')[1]; // Remove data URL scheme
        setUploading(true);

        try {
          // Send image to Lambda via API Gateway
          const response = await fetch(apiGatewayUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              fileContent: base64Image,
              width: width, // Use width provided via props
              height: height, // Use height provided via props
            }),
          });

          const data = await response.json();
          if (response.ok) {
            // Image uploaded successfully
            onUploadComplete(data.url); // Pass the uploaded image URL back to the parent component
            resolve(data.url); // Resolve the promise with the uploaded image URL
          } else {
            setError('Failed to upload image: ' + data.error);
            reject('Failed to upload image');
          }
        } catch (err) {
          setError('Error uploading image: ' + err.message);
          reject(err);
        } finally {
          setUploading(false);
        }
      };

      reader.onerror = () => {
        setError('Failed to read file');
        reject('Failed to read file');
      };
    });
  };

  // Use `useImperativeHandle` to expose the `uploadImage` function to the parent via `ref`
  useImperativeHandle(ref, () => ({
    uploadImage,
  }));

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],   // Accept JPEG and JPG files
      'image/png': ['.png'],             // Accept PNG files
    },
    maxFiles: 1,
  });
  

  return (
    <div>
      <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }}>
        <input {...getInputProps()} />
        <p>Drag and drop or click to browse</p>
      </div>
      {uploading && <p>Uploading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!uploading && manualUpload && file && (
        <p>{file.name} ready to upload</p> // Display file name but don't upload until instructed
      )}
    </div>
  );
});

export default ImageUploader;
