// src/common/customSelectStyles.js

export const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#fff',  // Make the select input background white
      borderRadius: '4px',
      borderColor: '#c4c4c4',  // Match Material-UI border color
      boxShadow: 'none',
      '&:hover': { borderColor: '#a6a6a6' },
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 9999,  // Set a high z-index to ensure the dropdown appears above other elements
    }),
  };
  