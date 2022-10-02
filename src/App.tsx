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
      {/*
        * <RatingCard />
        */}
      <RatingCardSass />
    </StyledContainer>
  )
}

export default App
