import React from 'react';
import { Box } from '@mui/material';

import InfoSection from './components/InfoSection';
import ServiceSection from './components/ServiceSection';
import TeamSection from './components/TeamSection';

function Section({ isLogin, handleDialogOpen }) {
  return (
    <Box>
      <InfoSection />
      <ServiceSection isLogin={isLogin} handleDialogOpen={handleDialogOpen} />
      <TeamSection />
    </Box>
  );
}

export default Section;
