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
  }
})
