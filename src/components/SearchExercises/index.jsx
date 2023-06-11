import React, { useEffect, useState } from 'react';
import P from 'prop-types';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { mui } from './mui';
import HorizontalScrollbar from '../HorizontalScrollbar';
import { exerciseOptions, fetchData } from '../../utils/fetchData';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions,
      );
      setBodyParts(['all', ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search),
      );
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };
  //   console.log(bodyParts, bodyPart);
  return (
    <Stack {...mui.stack}>
      <Typography {...mui.typography}>
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box {...mui.boxFirst}>
        <TextField {...mui.textField} onChange={(e) => setSearch(e.target.value.toLowerCase())} value={search} />
        <Button {...mui.button} onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  );
};

SearchExercises.propTypes = {
  setExercises: P.func,
  setBodyPart: P.func,
  bodyPart: P.any,
};

export default SearchExercises;
