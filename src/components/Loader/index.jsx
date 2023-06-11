import { Stack } from '@mui/material';
import React from 'react';
import { mui } from './mui';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Stack {...mui.stack}>
      <InfinitySpin {...mui.spin} />
    </Stack>
  );
};

export default Loader;
