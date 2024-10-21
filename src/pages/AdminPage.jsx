import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import CreateTournament from '../components/TournamentForms/CreateTournament';
import CreateClub from '../components/ClubForms/CreateClub';  // Assuming you have these components
import CreateMember from '../components/MemberForms/CreateMember';
import CreateBoatRamp from '../components/RampForms/CreateBoatRamp';
import CreateLake from '../components/LakeForms/CreateLake';

// A utility component for rendering tab panels
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const AdminPage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  return (
    <div>
      {/* Tabs */}
      <Tabs value={tabIndex} onChange={handleTabChange} aria-label="Admin forms tabs">
        <Tab label="Tournaments" />
        <Tab label="Clubs" />
        <Tab label="Members" />
        <Tab label="Lakes" />
        <Tab label="Boat Ramps" />
      </Tabs>

      {/* Tab Panels */}
      <TabPanel value={tabIndex} index={0}>
        <CreateTournament />
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <CreateClub />
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        <CreateMember />
      </TabPanel>
      <TabPanel value={tabIndex} index={3}>
        <CreateLake />
      </TabPanel>
      <TabPanel value={tabIndex} index={4}>
        <CreateBoatRamp />
      </TabPanel>
    </div>
  );
};

export default AdminPage;

