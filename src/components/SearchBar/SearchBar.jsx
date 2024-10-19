
import React, { useState } from 'react';
import {
    Select, MenuItem,
  TextField,
  IconButton,
  InputAdornment,
  Box,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'; // Correct import
import dayjs from 'dayjs';
import { usStates } from '../../common/stateList';


function SearchBar() {
  const [state, setState] = useState('');
  const [date, setDate] = useState(null);

  const handleSearch = () => {
    console.log(
      `Searching for State: ${state}, Date: ${
        date ? dayjs(date).format('YYYY-MM-DD') : 'Not selected'
      }`
    );
    // Implement your search logic here
  };

  return (
    <Box className="search-bar-container">
      <Box className="search-bar">
        {/* State Input */}
        <Box className="search-item">
      <Typography variant="caption" className="search-label">
        Where
      </Typography>
      <Select
        value={state}
        onChange={(e) => setState(e.target.value)}
        fullWidth
        displayEmpty
        inputProps={{
          className: 'search-input',
          'aria-label': 'Search by state',
        }}
        startAdornment={(
          <InputAdornment position="start">
            <LocationOnIcon color="action" />
          </InputAdornment>
        )}
        variant="standard"
        disableUnderline
      >
        <MenuItem value="" disabled>
          Select a state
        </MenuItem>
        {usStates.map((stateItem) => (
          <MenuItem key={stateItem} value={stateItem}>
            {stateItem}
          </MenuItem>
        ))}
      </Select>
    </Box>

        {/* Date Picker Input */}
        <Box className="search-item">
          <Typography variant="caption" className="search-label">
            Date
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={date}
              onChange={(newValue) => setDate(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  placeholder="Select date"
                  InputProps={{
                    disableUnderline: true,
                    className: 'search-input',
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  aria-label="Select date"
                />
              )}
            />
          </LocalizationProvider>
        </Box>

        {/* Search Button */}
        <IconButton
          className="search-button"
          onClick={handleSearch}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default SearchBar;
