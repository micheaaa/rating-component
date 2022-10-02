import {createStitches} from '@stitches/react'

export const {styled, css} = createStitches({
  theme: {
    colors: {
      white: 'hsl(0, 0%, 100%)',
      light_grey: 'hsl(217, 12%, 63%)',
      medium_grey: 'hsl(216, 12%, 54%)',

      orange: 'hsl(25, 97%, 53%)',
      blue: 'hsl(213, 19%, 18%)',
      dark_blue: 'hsl(216, 12%, 8%)', 
      darkest_blue: 'hsl(225, 9%, 9%)',
    }
  },
  media: {
    xs: '(max-width: 400px)',
    sm: '(max-width: 600px)',
    md: '(max-width: 830px)',
    lg: '(max-width: 1024px)',
  },
  utils: {
    py: (value: string | number) => ({
      paddingTop: value,
      paddingBottom: value,
    }), 
    trns: (value: string) => ({
      transitionProperty: value,
      transitionDuration: '0.1s',
      transitionTimingFunction: 'ease-in-out',
    }),
  }
})
