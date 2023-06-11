import Logo from '../../assets/images/Logo.png';

export const mui = {
  stackPrimary: {
    direction: 'row',
    justifyContent: 'space-around',
    sx: {
      gap: {
        sm: '123px',
        xs: '40px',
      },
      mt: {
        sm: '32px',
        xs: '20px',
      },
      justifyContent: 'none',
    },
    px: '20px',
  },
  img: {
    src: Logo,
    alt: 'logo',
    style: {
      width: '48px',
      height: '48px',
      margin: '0px 20px',
    },
  },
  stackSecond: {
    direction: 'row',
    gap: '40px',
    fontFamily: 'Alegreya',
    fontSize: '24px',
    alignItems: 'flex-end',
  },
  linkStyle: {
    textDecoration: 'none',
    color: '#3A1212',
    borderBottom: '3px solid #ff2625',
  },
  aStyle: {
    textDecoration: 'none',
    color: '#3a1212',
  },
};
