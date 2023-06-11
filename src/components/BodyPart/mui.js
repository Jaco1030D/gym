import icon from '../../assets/icons/gym.png';

export const mui = {
  Stack: {
    type: 'button',
    alignItems: 'center',
    justifyContent: 'center',
    className: 'bodyPart-card',
  },
  sxFirst: {
    borderTop: '4px solid #FF2625',
    background: '#fff',
    borderBottomLeftRadius: '20px',
    width: '270px',
    height: '282px',
    cursor: 'pointer',
    gap: '47px',
  },
  sxSecond: {
    background: '#fff',
    borderBottomLeftRadius: '20px',
    width: '270px',
    height: '282px',
    cursor: 'pointer',
    gap: '47px',
  },
  img: {
    src: icon,
    alt: 'dumbbell',
    style: {
      width: '40px',
      heigth: '40px',
    },
  },
  typography: {
    fontSize: '24px',
    fontWeight: 'bold',
    fontFamily: 'Alegreya',
    color: '#3a1212',
    textTransform: 'capitalize',
  },
};
