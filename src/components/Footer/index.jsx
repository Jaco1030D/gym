import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { mui } from './mui';

const Footer = () => (
  <Box {...mui.box}>
    <Stack {...mui.stack}>
      <img {...mui.img} />
    </Stack>
    <Typography {...mui.typography}>Made with by Jacó</Typography>
  </Box>
);

export default Footer;
