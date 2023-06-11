import { Box, Stack, Typography } from '@mui/material';
import P from 'prop-types';
import { mui } from './mui';

const ExerciseVideos = ({ exercisesVideos, name }) => {
  return (
    <Box {...mui.box}>
      <Typography {...mui.typographyFirst}>
        Watch <span {...mui.span}>{name}</span> exercise videos
      </Typography>
      <Stack {...mui.stack}>
        {exercisesVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography {...mui.typographySecond}>{item.video.title}</Typography>
              <Typography {...mui.typographyThird}>{item.video.channelName}</Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

ExerciseVideos.propTypes = {
  exercisesVideos: P.any,
  name: P.any,
};

export default ExerciseVideos;
