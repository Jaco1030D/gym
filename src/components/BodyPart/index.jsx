import React from 'react';
import P from 'prop-types';
import { Stack, Typography } from '@mui/material';
import { mui } from './mui';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? '4px solid #FF2625' : '',
        ...mui.sxSecond,
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img {...mui.img} />
      <Typography {...mui.typography}> {item} </Typography>
    </Stack>
  );
};

BodyPart.propTypes = {
  item: P.any,
  setBodyPart: P.func,
  bodyPart: P.any,
};

export default BodyPart;
