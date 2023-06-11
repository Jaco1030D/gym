import { Typography, Box, Stack } from '@mui/material';
import P from 'prop-types';

import Loader from '../Loader';
import HorizontalScrollbar from '../HorizontalScrollbar';
import { mui } from './mui';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box {...mui.box}>
    <Typography {...mui.typographyFirst}>
      Similar <span {...mui.span}>Target Muscle</span> exercises
    </Typography>
    <Stack {...mui.stack}>
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
    </Stack>
    <Typography {...mui.typographySecond}>
      Similar <span {...mui.span}>Equipment</span> exercises
    </Typography>
    <Stack {...mui.stack}>
      {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
    </Stack>
  </Box>
);

SimilarExercises.propTypes = {
  targetMuscleExercises: P.any,
  equipmentExercises: P.any,
};

export default SimilarExercises;
