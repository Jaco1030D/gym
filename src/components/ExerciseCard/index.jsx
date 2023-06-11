import React from 'react';
import P from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import { mui } from './mui';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button {...mui.buttonFirst}>{exercise.bodyPart}</Button>
        <Button {...mui.buttonSecond}>{exercise.target}</Button>
      </Stack>
      <Typography {...mui.typography}>{exercise.name}</Typography>
    </Link>
  );
};

ExerciseCard.propTypes = {
  exercise: P.any,
};

export default ExerciseCard;
