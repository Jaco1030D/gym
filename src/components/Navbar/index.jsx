import { Stack } from '@mui/material';
import React from 'react';
import { mui } from './mui';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <Stack {...mui.stackPrimary}>
    <Link to="/">
      <img {...mui.img} />
    </Link>
    <Stack {...mui.stackSecond}>
      <Link to="/" style={{ ...mui.linkStyle }}>
        Home
      </Link>
      <a href="#exercises" style={{ ...mui.aStyle }}>
        {' '}
        Exercises{' '}
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
