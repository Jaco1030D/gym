import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { mui } from './mui';

const HeroBanner = () => (
  <Box {...mui.box}>
    <Typography {...mui.typographyPrimary}>Fitness Club</Typography>
    <Typography {...mui.typographySecond}>
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography {...mui.typographyThird}>
      Check out the most effective exercises <br /> personalized to you
    </Typography>
    <Stack>
      <a {...mui.aStyle}>Explore Exercises</a>
    </Stack>
    <Typography {...mui.typographyFourth}>Exercise</Typography>
    <img {...mui.img} />
  </Box>
);
export default HeroBanner;
