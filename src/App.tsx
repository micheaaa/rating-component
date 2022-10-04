import {Route, Router} from 'wouter'
import {enableLegendStateReact} from '@legendapp/state/react'

import {styled} from './utils/stitches'

import {RatingCard} from './components/RatingCard'
import {RatingCardSass} from './components/RatingCardSass'
import {RatingCardLegendState} from './components/RatingCardLegendState'

enableLegendStateReact()

const StyledContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', 
  padding: '2rem',
  color: '$white',
  backgroundColor: '$darkest_blue',
})

function App() {
  return (
    <StyledContainer className="App">
      <Router base="/rating-component">
        <Route path="/">
          <RatingCard />
        </Route>
        <Route path="/scss">
          <RatingCardSass />
        </Route>
        <Route path="/legend">
          <RatingCardLegendState />
        </Route>
      </Router>
    </StyledContainer>
  )
}

export default App
