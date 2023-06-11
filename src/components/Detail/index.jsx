import P from 'prop-types';
import BodyPartImage from '../../assets/icons/body-part.png';
import TargetImage from '../../assets/icons/target.png';
import EquipmentImage from '../../assets/icons/equipment.png';
import { Button, Stack, Typography } from '@mui/material';
import { mui } from './mui';

const Detail = ({ exerciseDetails }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetails;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <Stack {...mui.stackFirst}>
      <img {...mui.img} src={gifUrl} alt={name} />
      <Stack {...mui.stackSecond}>
        <Typography {...mui.typographyFirst}>{name}</Typography>
        <Typography {...mui.typographySecond}>
          Exercises keep you strong. <span style={{ textTransform: 'capitalize' }}>{name}</span>bup is one of the best{' '}
          <br /> exercises to target your {target}. It will help you improve your <br /> mood and gain energy.
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} {...mui.stackThird}>
            <Button {...mui.button}>
              <img src={item.icon} alt={item.name} style={{ width: '50px', height: '50px' }} />
            </Button>
            <Typography {...mui.typographyThird}>{item.name}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

Detail.propTypes = {
  exerciseDetails: P.object,
};

export default Detail;
