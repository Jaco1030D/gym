import React, { useEffect, useState } from 'react';
import { mui } from './mui';
import { Box, Pagination, Stack, Typography } from '@mui/material';
import P from 'prop-types';
import { exerciseOptions, fetchData } from '../../utils/fetchData';
import Loader from '../Loader';
import ExerciseCard from '../ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Loader />;
  return (
    <Box {...mui.box}>
      <Typography {...mui.typography}>Showing Results</Typography>
      <Stack {...mui.stackFirst}>
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack {...mui.stackSecond}>
        {exercises.length > 9 && (
          <Pagination
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            defaultPage={1}
            {...mui.pagination}
          />
        )}
      </Stack>
    </Box>
  );
};

Exercises.propTypes = {
  exercises: P.any,
  setExercises: P.any,
  bodyPart: P.string,
};

export default Exercises;
