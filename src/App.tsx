import {Route} from 'wouter'

import {styled} from './utils/stitches'

import {RatingCard} from './components/RatingCard'
import {RatingCardSass} from './components/RatingCardSass'

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
      <Route path="/">
        <RatingCard />
      </Route>
      <Route path="/scss">
        <RatingCardSass />
      </Route>
    </StyledContainer>
  )
}

export default App
