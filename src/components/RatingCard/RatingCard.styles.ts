import { styled } from '~/utils/stitches'

export const StyledCard = styled('section', {
  width: 'min-content',
  padding: '3rem',
  fontSize: '1.6rem',
  borderRadius: '3rem',
  backgroundImage: 'linear-gradient(to bottom left, $blue, $dark_blue)',
  backgroundSize: '120%',
  backgroundPosition: 'top right',

  h1: {
    fontSize: '2.6rem',
    marginBottom: '1.5rem',
  },

  p: {
    color: '$light_grey',
  },

  '@xs': {
    width: '100%',
  }
})

export const StyledRatingScreen = styled('form', {
  display: 'grid',
  gap: '3rem',

  '.icon': {
     justifySelf: 'flex-start'
  },

  '.icon, .rating-section label': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '4.2rem',
    height: '4.2rem',
    borderRadius: '50%',
    backgroundColor: '$blue',
  },

  '.rating-section': {
    display: 'flex',
    gap: '2.5rem',

    'input[type="radio"]': {
      display: 'none'
    },

    label: {
      cursor: 'pointer',
      fontSize: '1.8rem',
      color: '$light_grey',
      trns: 'background-color, color',

      '&:hover': {
        backgroundColor: '$medium_grey',
      }
    },

    'label:hover, input[type="radio"]:checked ~ label': {
      color: '$white',
    },

    'input[type="radio"]:checked ~ label': {
      backgroundColor: '$orange',
    },

    '@xs': {
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1rem 2.5rem',
    },
  },

  button: {
    cursor: 'pointer',
    padding: '1.5rem',
    fontWeight: 600,
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15rem',
    border: 0,
    borderRadius: 999,
    color: '$white',
    backgroundColor: '$orange',
    trns: 'background-color',

    '&:hover': {
      color: '$orange',
      backgroundColor: '$white',
    }
  }
})
