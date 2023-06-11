import P from 'prop-types';
import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { VisibilityContext, ScrollMenu } from 'react-horizontal-scrolling-menu';
import { mui } from './mui';
import BodyPart from '../BodyPart';
import ExerciseCard from '../ExerciseCard';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img {...mui.imgLeftArrow} />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img {...mui.imgRightArrow} />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  //   console.log(data, bodyParts);
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box key={item.id || item} itemId={item.id || item} title={item.id || item} m="40px">
          {bodyParts ? (
            <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};

HorizontalScrollbar.propTypes = {
  data: P.any,
  bodyParts: P.any,
  setBodyPart: P.any,
  bodyPart: P.any,
};

export default HorizontalScrollbar;
