import {styled} from './utils/stitches'

import {RatingCard} from './components/RatingCard'

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
      <RatingCard />
    </StyledContainer>
  )
}

export default App
